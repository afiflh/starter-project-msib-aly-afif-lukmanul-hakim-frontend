import React from 'react';
import PropTypes from 'prop-types';

const shapes = {
    round: 'rounded-[13px]',
};

const variants = {
    fill: {
        white_A700: 'bg-white-A700 shadow-sm text-black-900_7a',
    },
};

const sizes = {
    xs: 'h-[32px] pl-[19px] pr-[35px] text-base',
};

const Input = React.forwardRef(
    (
        {
            className = '',
            name = '',
            placeholder = '',
            type = 'text',
            label = '',
            prefix,
            suffix,
            onChange,
            shape,
            size = 'xs',
            variant = 'fill',
            color = 'white_A700',
            ...restProps
        },
        ref
    ) => {
        const handleChange = (e) => {
            if (onChange) onChange(e?.target?.value);
        };

        const Component = label ? 'label' : 'div';

        return (
            <Component
                className={`${className} flex items-center justify-center cursor-text text-black-900_7a tracking-[4.80px] text-base border-white-A700 border border-solid ${
                    variants[variant]?.[color] || variants[variant] || ''
                } ${sizes[size] || ''} ${shapes[shape] || ''}`}
            >
                {!!label && label}
                {!!prefix && prefix}
                <input
                    ref={ref}
                    type={type}
                    name={name}
                    onChange={handleChange}
                    placeholder={placeholder}
                    {...restProps}
                />
                {!!suffix && suffix}
            </Component>
        );
    }
);

Input.displayName = 'Input';

Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    shape: PropTypes.oneOf(['round']),
    size: PropTypes.oneOf(['xs']),
    variant: PropTypes.oneOf(['fill']),
    color: PropTypes.oneOf(['white_A700']),
    onChange: PropTypes.func,
};

export default Input;
