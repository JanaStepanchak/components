import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../image/Image';
import './Card.css';

const CardType2 = ({ children, 
  href,  src, postDate, postCat, 
  className, ...attrs } ) => {
    const classes = classNames(
      "post-item",
      className,
    );

  return (
    <div className= {classes}>
		<div className="post-item-wrap">
			<a href={href} class="post-link">
				<Image src={src} />
				<div className="post-info">
					<div className="post-meta">
            <div className="post-date"> {postDate}</div>
            <div className="post-cat">{postCat}</div>
				</div>
        <h3 className="post-title">{children}</h3>
				</div>
				</a>
		</div>  
	</div>
  );
};

CardType2.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  src: PropTypes.string,
  postDate: PropTypes.string,
  postCat: PropTypes.string,
};

CardType2.defaultProps = {
  className: '',
  href: '',
  src: '',
  postDate: '',
  postCat: '',
};

export default CardType2;
