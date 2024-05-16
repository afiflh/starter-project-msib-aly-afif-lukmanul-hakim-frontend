import PropTypes from 'prop-types';

const sizes = {
    xs: 'text-[11px] font-normal',
    s: 'text-xl font-normal',
};

const Text = ({ children, size = 'xs', as, className = '', ...restProps }) => {
    const Component = as || 'p';

    return (
        <Component
            className={`text-white-A700 font-serif ${className} ${sizes[size]}`}
            {...restProps}
        >
            {children}
        </Component>
    );
};

Text.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['xs', 's']),
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
    className: PropTypes.string,
};

export default Text;
