import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Loader.css';

const Loader = ({   className, ...attrs
}) => {
  const classes = classNames(
    'loader',
      className,
  );

  return (
    <div className={classes}
     {...attrs}
     ></div>
  );
};

Loader.propTypes = {
  className: PropTypes.string,
};

Loader.defaultProps = {
  className: '',
};

export default Loader;
