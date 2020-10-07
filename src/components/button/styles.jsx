import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({
    className,
    children,
    label,
    type,
    variant,
}) => (
    <button
        className={className}
        type={type}
        variant={variant}
    >
        {label}
    </button>
);

Button.propTypes = {
    type: PropTypes.string,
    variant: PropTypes.string,
};

Button.defaultProps = {
    type: 'button',
    variant: '',
};

export default {
    Button,
};

