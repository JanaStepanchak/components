import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import Image from '../image/Image';
import Input from '../input/Input';
import './Card.css';

const CardType3 = ({ children, 
  imageSrc, imgAlt, resumeName, resumeProfession, valueInput, hrefProfile,
  // chat , hrefProfile,
  className, ...attrs } ) => {
    const classes = classNames(
      "post-item",
      className,
    );

  return (
    < >
		<div className="resume-item-wrap" {...attrs} >
      <div className="resume" >

        <span className="">
          <Image src={imageSrc} alt={imgAlt} width={60} height={60} сlassName="resume-image" circle/>
        </span>
        <div  className="resume-title">
  <h3 className="resume-name">{resumeName}</h3>
  <span className="resume-profession">{resumeProfession}</span>
        
        </div>
        <div className="networks">

        <span className="resume-icon" size={8} colorIcon ={"#F09EA3"}>
          <Icon name='cat' />
        </span>
        <span className="resume-icon" size={8} colorIcon ={"#F09EA3"}>
          <Icon name='paw' />
        </span>
        <span className="resume-icon" size={8} colorIcon ={"#F09EA3"}>
          <Icon name='comment' />
        </span>
        </div>
    </div>
    <div className="resume-skills">
      <Input id="range" value={valueInput}  type="range" />
      <Button onClick={() => { console.log('CHAT'); }}>CHAT</Button>
      <Button  onClick={() => { console.log('PROFILE'); }}>PROFILE</Button>
    </div>	
		</div>

	</>
  );
};

CardType3.propTypes = {
  className: PropTypes.string,
  imageSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  resumeName: PropTypes.string,
  resumeProfession: PropTypes.string,
  valueInput: PropTypes.number,
  hrefProfile: PropTypes.string,
};

CardType3.defaultProps = {
  className: '',
  imageSrc: '',
  imgAlt: '',
  resumeName: '',
  resumeProfession: '',
  valueInput: 50,
  hrefProfile:''
};

export default CardType3;
