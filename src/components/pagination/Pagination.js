import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Pagination.css';

const Pagination = ({
  children, className, vertical, ...attrs
}) => {
  const classes = classNames(
    'pagination',
    className,
    { vertical },
  );

  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  );
};

Pagination.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  vertical: PropTypes.bool,
};

Pagination.defaultProps = {
  children: null,
  className: '',
  vertical: false,
};

export default Pagination;