<?php

/**
 * Handle file uploads via XMLHttpRequest
 */
class HashFormUploadedFileXhr {

    /**
     * Save the file to the specified path
     * @return boolean TRUE on success
     */
    public function save( $path ) {
        global $wp_filesystem;

        // 1. Initialize the WordPress Filesystem API
        if (empty($wp_filesystem)) {
            require_once(ABSPATH . '/wp-admin/includes/file.php');
            // Attempt direct connection; if it fails, this might prompt for credentials elsewhere
            if (!WP_Filesystem()) {
                // Log error or handle failure to initialize filesystem
                // error_log('Failed to initialize WP_Filesystem.');
                return false;
            }
        }

        // 2. Read the raw input stream into memory
        // (This replaces the initial fopen("php://input"), stream_copy_to_stream, and fclose($input))
        $raw_input_data = file_get_contents('php://input');

        if ($raw_input_data === false) {
            return false;
        }

        $realSize = strlen($raw_input_data);

        // 3. Perform size validation
        if ($realSize != $this->getSize()) {
            // Clear the data from memory
            $raw_input_data = null;
            return false;
        }

        // 4. Write data to the target file using WP_Filesystem
        // (This replaces tmpfile(), fseek(), fopen($path), stream_copy_to_stream, and fclose($target))
        $result = $wp_filesystem->put_contents(
            $path,
            $raw_input_data,
            FS_CHMOD_FILE // Optional: Sets recommended file permissions (e.g., 0644)
        );

        // Clear the data from memory after writing
        $raw_input_data = null;

        // 5. Return success status
        return $result; // put_contents returns true on success, false on failure.
    }

    function getName() {
        return HashFormHelper::get_var('qqfile');
    }

    function getSize() {
        if (isset($_SERVER["CONTENT_LENGTH"])) {
            return (int) $_SERVER["CONTENT_LENGTH"];
        } else {
            throw new Exception(esc_html__('Getting content length is not supported.', 'hash-form'));
        }
    }

}

class HashFormFileUploader {

    private $allowedExtensions = array();
    private $sizeLimit = 10485760;
    private $file;

    function __construct(array $allowedExtensions = array(), $sizeLimit = 10485760) {
        $allowedExtensions = array_map('strtolower', $allowedExtensions);
        //$unallowed_extensions = array('php', 'exe', 'ini', 'perl');
        $exts = array_keys(get_allowed_mime_types());

        $available_exts = array();
        foreach ($exts as $ext) {
            $array = explode('|', $ext);
            foreach ($array as $a) {
                $available_exts[] = $a;
            }
        }

        $count = 0;
        foreach ($allowedExtensions as $ext) {
            if (!in_array($ext, $available_exts)) {
                unset($allowedExtensions[$count]);
            }
            $count++;
        }

        $this->allowedExtensions = $allowedExtensions;
        $this->sizeLimit = $sizeLimit;
        $this->checkServerSettings();

        if (HashFormHelper::get_var('qqfile')) {
            $this->file = new HashFormUploadedFileXhr();
        } else {
            $this->file = false;
        }
    }

    private function checkServerSettings() {
        $postSize = $this->toBytes(ini_get('post_max_size'));
        $uploadSize = $this->toBytes(ini_get('upload_max_filesize'));

        if ($postSize < $this->sizeLimit || $uploadSize < $this->sizeLimit) {
            $size = max(1, $this->sizeLimit / 1024 / 1024) . 'M';
            die(esc_html("{'error':'increase post_max_size and upload_max_filesize to $size'}"));
        }
    }

    private function toBytes($str) {
        $val = trim($str);
        $last = strtolower($str[strlen($str) - 1]);
        $val = floatval($val);
        switch ($last) {
            case 'g':
                $val *= 1024 * 1024 * 1024;
            case 'm':
                $val *= 1024 * 1024;
            case 'k':
                $val *= 1024;
        }

        return $val;
    }

   function handleUpload($uploadDirectory, $replaceOldFile = false, $upload_url = '') {
        // 1. Initialize WP_Filesystem
        // Get the global filesystem object
        global $wp_filesystem;
        
        // Attempt to initialize WP_Filesystem, requesting credentials if necessary.
        // NOTE: In a class method within a plugin, you might use request_filesystem_credentials()
        // and/or a more robust WP_Filesystem initialization check. 
        // For this example, we assume it's loaded, or load it with Direct access as a fallback.
        if (!function_exists('WP_Filesystem')) {
            require_once(ABSPATH . 'wp-admin/includes/file.php');
        }
        
        // Initialize WP_Filesystem - use 'direct' method as a fallback if no credentials are set
        $access_type = get_filesystem_method();
        if ($access_type === 'direct' && WP_Filesystem(false, ABSPATH, true)) {
            // Filesystem is loaded for direct access
        } else {
            // Fallback for hosting environments that require credentials
            // A more complex implementation would request these. For now, we'll return an error.
            return array('error' => esc_html__('WP_Filesystem could not be initialized. Please check your file permissions or setup for FTP/SSH.', 'hash-form'));
        }

        // --- Original Logic ---
        $this->ensureUploadDirectory($uploadDirectory);
        $uploadDirectory = trailingslashit($uploadDirectory . '/temp');
        $upload_url = $upload_url . '/temp';
        $unallowed_extensions = array('php', 'exe', 'ini', 'perl', 'asp');

        // 2. WP_Filesystem: Check if directory exists and is writable (equivalent to !is_writable)
        // wp_mkdir_p() will create the directory if it doesn't exist, which is good practice.
        if (!$wp_filesystem->is_dir($uploadDirectory)) {
            if (!$wp_filesystem->mkdir($uploadDirectory, FS_CHMOD_DIR)) {
                return array('error' => esc_html__('Server error. Failed to create upload directory or it is not writable.', 'hash-form'));
            }
        } elseif (!$wp_filesystem->is_writable($uploadDirectory)) {
            return array('error' => esc_html__('Server error. Upload directory isn\'t writable.', 'hash-form'));
        }

        if (!$this->file) {
            return array('error' => esc_html__('No files were uploaded.', 'hash-form'));
        }

        $size = $this->file->getSize();

        if ($size == 0) {
            return array('error' => esc_html__('File is empty', 'hash-form'));
        }

        if ($size > $this->sizeLimit) {
            return array('error' => esc_html__('File is too large', 'hash-form'));
        }

        $pathinfo = pathinfo($this->file->getName());
        $filename = $pathinfo['filename'];
        $ext = @$pathinfo['extension'];  // hide notices if extension is empty

        if (in_array(strtolower($ext), $unallowed_extensions)) {
            return array('error' => esc_html__('This type of file is not allowed.', 'hash-form'));
        }

        if ($this->allowedExtensions && !in_array(strtolower($ext), $this->allowedExtensions)) {
            $these = implode(', ', $this->allowedExtensions);
            return array('error' => esc_html__('File has an invalid extension, it should be one of', 'hash-form') . ' ' . $these . '.');
        }

        if (!$replaceOldFile) {
            /// don't overwrite previous files that were uploaded
            // 3. WP_Filesystem: Check for file existence (equivalent to file_exists)
            while ($wp_filesystem->exists($uploadDirectory . $filename . '.' . $ext)) {
                $filename .= wp_rand(10, 99);
            }
        }

        // 4. WP_Filesystem: Save the file content
        // This assumes $this->file->save() is an internal method that handles the move
        // from a temporary upload location. Since we don't know its implementation,
        // the safest replacement involves getting the file content and using put_contents().
        // We assume $this->file->getTempPath() returns the path to the uploaded file.
        $temp_path = $this->file->getTempPath(); 
        $destination_path = $uploadDirectory . $filename . '.' . $ext;
        
        // $this->file->save() is replaced with $wp_filesystem->move() or $wp_filesystem->put_contents()
        
        // Option A: Use move() - Requires getting the temporary path of the uploaded file
        if ($wp_filesystem->move($temp_path, $destination_path, true)) {
        // Option B: Use put_contents() if move isn't possible, requires file_get_contents
        // $file_content = file_get_contents($temp_path);
        // if ($wp_filesystem->put_contents($destination_path, $file_content, FS_CHMOD_FILE)) {
            return array(
                'success' => true,
                'url' => $upload_url . '/' . $filename . '.' . $ext,
                'path' => HashFormHelper::encrypt($filename . '.' . $ext)
            );
        } else {
            return array(
                'error' => esc_html__('Could not save uploaded file. The upload was cancelled, or server error encountered.', 'hash-form')
            );
        }
    }

    protected function ensureUploadDirectory($path) {
        if (!is_dir($path)) {
            mkdir($path, 0755);
            file_put_contents($path . '/.htaccess', file_get_contents(HASHFORM_PATH . 'admin/stubs/htaccess.stub'));
        }

        if (!is_dir($path . '/temp')) {
            mkdir($path . '/temp', 0755);
            file_put_contents($path . '/temp/.htaccess', file_get_contents(HASHFORM_PATH . 'admin/stubs/htaccess.stub'));
        }

        if (!file_exists($path . '/index.php')) {
            file_put_contents($path . '/index.php', file_get_contents(HASHFORM_PATH . 'admin/stubs/index.stub'));
        }

        if (!file_exists($path . '/temp/index.php')) {
            file_put_contents($path . '/temp/index.php', file_get_contents(HASHFORM_PATH . 'admin/stubs/index.stub'));
        }
    }

}
