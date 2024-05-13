import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-[13px]"
};

const variants = {
    fill : {
        blue_700: "bg-blue-700 shadow-sm text-white-A700",
    },
};

const sizes = {
    xs: "h-[32px] px-[10px] text-lg",
};

const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "xs",
    color = "blue_700",
    ...restProps
}) => {
    return (
        <button className={`${className} flex flex-row items-center justify-center cursor-pointer text-white-A700 font-serif border-white-A700 border border-solid bg-blue-700 shadow-sm rounded-[13px] ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    variant: PropTypes.oneOf(["fill"]),
    size: PropTypes.oneOf(["xs"]),
    color: PropTypes.oneOf(["blue_700"]),
};

export { Button };