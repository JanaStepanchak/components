import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// import './Select.css';

const Select = ({  children, className,  ...attrs}) => {
  const classes = classNames(
    className,
  );

  return (
    <select className={classes} {...attrs}>
      {children}
    </select>
  );
};

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Select.defaultProps = {
  children: null,
  className: '',
};

export default Select;



