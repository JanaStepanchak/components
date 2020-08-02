import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './BreadCrumbs.css';

const BreadCrumbs = ({ className, items,  ...attrs}) => {
  const classes = classNames(
    'bread-crumbs',
    className,
  );
  return (
    <>
    <ul className={classes} {...attrs}>
      {items.map(item => {
          return (
            <li className={'link'}>
            <Link key={item.name} to={item.link}>
              {item.name}
            </Link> /
            </li>
          )
        })}         
    </ul>
      </>
  );
};

BreadCrumbs.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  items: PropTypes.array.isRequired
};

BreadCrumbs.defaultProps = {
  children: null,
  className: '',
  items:[],
};

export default BreadCrumbs;
