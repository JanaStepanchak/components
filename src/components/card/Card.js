import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon/Icon';
import './Card.css';

const Card = ({ children, cardName, href,  icon,  className, ...attrs } ) => {
  const classes = classNames(
    "post-item",
    className,
  );

  return (
    <div className={classes} {...attrs} >
		<div className="item-content">
    <Icon name='align-right'colorIcon ={"#F09EA3"} size={2}/>
			<div className="item-body">
				<h3>{cardName}</h3>
				<p>{children}</p>
			</div>
			<div className="item-footer">
				<a href={href} className="link-post"><span>Details</span></a>
			</div>
		</div>
	</div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  cardName: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
};

Card.defaultProps = {
  className: '',
  cardName: '',
  href: '',
  icon: '',
};

export default Card;
