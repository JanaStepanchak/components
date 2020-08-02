import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Toggle.css';

const Toggle = ({
  children, className, vertical, ...attrs
}) => {
  const classes = classNames(
    'toggler',
    className,
    { vertical },
  );

  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  );
};

Toggle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  vertical: PropTypes.bool,
};

Toggle.defaultProps = {
  children: null,
  className: '',
  vertical: false,
};

export default Toggle;
