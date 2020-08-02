import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Table.css';

const Table = ({
  children, className, ...attrs
}) => {
  const classes = classNames(
    'table',
    className,
  );

  return (
    <table className={classes} {...attrs}>
      {children}
    </table>
  );
};

Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Table.defaultProps = {
  children: null,
  className: '',
};

export default Table;
