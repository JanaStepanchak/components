import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// import './Option.css';

const Option = ({  children,  className,  ...attrs}) => {
  const classes = classNames(
    className,
  );

  return (
    <option  className={classes} {...attrs}>
      {children}
    </option >
  );
};

Option.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Option.defaultProps = {
  children: null,
  className: '',
};

export default Option;