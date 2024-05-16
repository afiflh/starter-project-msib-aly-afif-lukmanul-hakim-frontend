import PropTypes from 'prop-types';

const Img = ({
    className = '',
    src = 'defaultNoData.png',
    alt = 'testImg',
    ...restProps
}) => {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            {...restProps}
            loading={'lazy'}
        />
    );
};

Img.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default Img;
