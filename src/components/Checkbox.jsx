import React from "react";
import PropTypes from "prop-types";

const variants = {
    primary: "border-white-A700 border border-solid bg-gray-800 checked:border checked: border-solid checked:bg-gray-800 checked:focus:bg-gray-800 checked:focus:border-white-A700",
};

const sizes = {
    xs: "h-[11px] w-[11px]",
};

const CheckBox = React.forwardRef(
    (
        {
            className = "",
            name = "",
            children,
            label = "",
            id = "checkbox_id",
            onChange,
            variant = "primary",
            size = "xs",
            ...restProps
        },
        ref,
    ) => {
        const handleChange = (e) => {
            if (onChange) onChange(e?.target?.checked);
        };

        return (
            <>
                <div className={className + " flex items-center gap-[5px] cursor-pointer"}>
                    <input
                        className={` ${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
                        ref={ref}
                        type="checkbox"
                        name={name}
                        onChange={handleChange}
                        id={id}
                        {...restProps}
                    />
                    {!!label && <label htmlFor={id}>{label}</label>}
                </div>
                {children}
            </>
        );
    }
);

CheckBox.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    variant: PropTypes.oneOf(["primary"]),
    size: PropTypes.oneOf(["xs"]),
};

export { CheckBox };