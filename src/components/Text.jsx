import React from "react";

const sizes = {
    xs: "text-[11px] font-normal",
    s: "text-xl font-normal",
};

const Text = ({ children, size = "xs", as, className = "", ...restProps }) => {
    const Component = as || "p";

    return (
        <Component className={`text-white-A700 font-serif ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export { Text };