import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Icon.css';

const Icon = ({
  name, className, size, colorIcon, onClick, disabled, ...attrs
}) => {
  const classes = classNames(
    'fa',  `fa-${name}`,  className,
    { func: onClick },
    { disabled },
 
  );

  const elemSize = size ? { fontSize: `${size}rem`, color: colorIcon } : null;

  return (
    <i
      {...attrs}
      className={classes}
      onClick={disabled ? null : onClick}
      style={elemSize}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.number,
  colorIcon: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Icon.defaultProps = {
  name: '',
  className: '',
  size: null,
  colorIcon: '',
  onClick: null,
  disabled: false,
};

export default Icon;
