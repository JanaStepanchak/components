import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Cell.css';

const Cell = ({
  children, className, head, ...attrs
}) => {
  const classes = classNames(
    'cell',
    className,
    head
  );

  const Tag = head ? 'th' : 'td';

return (
  <Tag className={classes} {...attrs}>
    {children}
  </Tag>
);
};

Cell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Cell.defaultProps = {
  children: null,
  className: '',
};

export default Cell;
