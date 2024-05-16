import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = React.forwardRef(
    ({ className = '', label = '', id = 'checkbox_id', ...restProps }, ref) => (
        <div
            className={`${className} flex items-center gap-[5px] cursor-pointer`}
        >
            <input ref={ref} type='checkbox' id={id} {...restProps} />
            {!!label && <label htmlFor={id}>{label}</label>}
        </div>
    )
);

CheckBox.displayName = 'CheckBox';

CheckBox.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
};

export default CheckBox;
