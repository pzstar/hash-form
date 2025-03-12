import {ToggleControl as ToglControl} from '@wordpress/components';

const ToggleControl = ({
    label,
    checked,
    onChange
}) => {
    return (
        <div className="hf-field">
            <ToglControl
                label={label}
                checked={checked}
                onChange={onChange}
            />
        </div>
    );
}

export default ToggleControl;
