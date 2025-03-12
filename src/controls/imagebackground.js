import {__} from '@wordpress/i18n';
import {ClearIcon} from '../utils/svgicons';
import {
    Dashicon,
    Button,
    Tooltip,
    FocalPointPicker
} from '@wordpress/components';
import {
    MediaPlaceholder
} from '@wordpress/block-editor';
import ColorControl from './color';
import SelectControl from './select';

const ImageBackgroundControl = ({
    label,
    imageURL,
    setImageURL,
    imageID,
    setImageID,
    imageAttachment,
    setImageAttachment,
    imageSize,
    setImageSize,
    imagePositionX,
    setImagePositionX,
    imagePositionY,
    setImagePositionY,
    imageRepeat,
    setImageRepeat,
    imageOverlayColor,
    setImageOverlayColor
}) => {

    return (
        <div className="hf-field hf-field-background">
            {label && (<label htmlFor="input">{label}</label>)}
            <div className="hf-input-fields hf-image-container">
                {(imageURL) ? (
                    <>
                        <FocalPointPicker
                            __nextHasNoMarginBottom
                            url={imageURL}
                            value={{
                                x: imagePositionX,
                                y: imagePositionY,
                            }}
                            onDragStart={value => {
                                setImagePositionX(value.x);
                                setImagePositionY(value.y);
                            }}
                            onDrag={value => {
                                setImagePositionX(value.x);
                                setImagePositionY(value.y);
                            }}
                            onChange={value => {
                                setImagePositionX(value.x);
                                setImagePositionY(value.y);
                            }}
                        />

                        <Button
                            isSecondary
                            className="hf-image-container-delete-button"
                            onClick={() => {
                                setImageID('');
                                setImageURL('');
                            }}
                        >
                            {__('Remove Image', 'hash-form')}
                        </Button>

                        <SelectControl
                            label={__('Attachment', 'hash-form')}
                            value={imageAttachment}
                            options={[
                                {label: esc_html__('Scroll', 'hash-form'), value: 'scroll'},
                                {label: esc_html__('Fixed', 'hash-form'), value: 'fixed'}
                            ]}
                            onChange={value => setImageAttachment(value)}
                        />

                        <SelectControl
                            label={__('Repeat', 'hash-form')}
                            value={imageRepeat}
                            options={[
                                {label: esc_html__('Repeat', 'hash-form'), value: 'repeat'},
                                {label: esc_html__('No Repeat', 'hash-form'), value: 'no-repeat'},
                                {label: esc_html__('Repeat X', 'hash-form'), value: 'repeat-x'},
                                {label: esc_html__('Repeat Y', 'hash-form'), value: 'repeat-y'}
                            ]}
                            onChange={value => setImageRepeat(value)}
                        />

                        <SelectControl
                            label={__('Size', 'hash-form')}
                            value={imageSize}
                            options={[
                                {label: esc_html__('Auto', 'hash-form'), value: 'auto'},
                                {label: esc_html__('Cover', 'hash-form'), value: 'cover'},
                                {label: esc_html__('Contain', 'hash-form'), value: 'contain'}
                            ]}
                            onChange={value => setImageSize(value)}
                        />

                        <ColorControl
                            label={__('Overlay Color', 'hash-form')}
                            enableAlpha={!0}
                            value={imageOverlayColor}
                            setValue={value => setImageOverlayColor(value)}
                        />
                    </>
                ) : (
                    <MediaPlaceholder
                        icon="format-image"
                        labels={{
                            title: esc_html__('Background Image', 'hash-form'),
                            name: esc_html__('Background Image', 'hash-form')
                        }}
                        value={imageID}
                        onSelect={value => {
                            setImageID(value.id);
                            setImageURL(value.url);
                        }}
                        accept="image/*"
                        allowedTypes={['image']}
                    />
                )}
            </div>
        </div>

    );
}

export default ImageBackgroundControl;