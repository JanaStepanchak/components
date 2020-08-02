import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';

const Button = ({
  children, onClick, className, size, disabled, active, invert, ...attrs
}) => {
  const onClickAction = e => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };

  const classes = classNames(
    'btn',
    className,
    { active },
    { invert },
  );

  const elemSize ={ fontSize: `${size}` };

  return (
    <button
      className={classes}
      style={elemSize}
      disabled={disabled}
      onClick={onClickAction}
      {...attrs}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

Button.defaultProps = {
  children: 'Button',
  onClick: () => {},
  className: '',
  size: 'medium' ,
  disabled: false,
  active: false,
};

export default Button;