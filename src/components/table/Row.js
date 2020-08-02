import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// import './Row.css';

const Row = ({
  children, className, head,...attrs
}) => {
  const classes = classNames(
    "row",
    className,
    head
  );

return (
  <>

  {head ? (
    <tr className={classes} head={head} {...attrs} >
    {children}
  </tr>
  )  : (
    <tr className={classes} {...attrs} >
        {children}
    </tr>
    )}
 </>
);
};


Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Row.defaultProps = {
  children: null,
  className: '',
};

export default Row;
