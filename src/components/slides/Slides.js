import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// import Icon from '../icon/Icon';
import Button from '../button/Button';
import Image from '../image/Image';

import './Slides.css';

class Slides extends Component {
  static propTypes = {
    images: PropTypes.array,
    classNames: PropTypes.string,
    currentImageIndex: PropTypes.number,
  }

  static defaultProps = {
    images:[],
    classNames: '',
    currentImageIndex: 0,
  }

  constructor( props ){
    super();

    this.state = {
      images:[
        "https://cdn.pixabay.com/photo/2015/07/15/11/53/woodtype-846088_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/02/15/17/06/red-eared-slider-1201602_1280.jpg",
        "https://cdn.pixabay.com/photo/2013/11/03/03/12/turtles-204710_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/12/29/01/25/turtles-1937560_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/05/29/17/17/terrapins-2354290_1280.jpg", 
      ],
      currentImageIndex: 0,
    }

    this.nextSlider = this.nextSlider.bind(this);
}

nextSlider(e){
  const { currentImageIndex, images } = this.state;
  let newIndex = currentImageIndex;

  if (e.currentTarget.dataset.direction === "next"){
    if (newIndex < images.length-1) {
      newIndex = currentImageIndex+1;
    } else {newIndex = 0;}
  }else{
    if (newIndex > 0) {
      newIndex = currentImageIndex-1;
    } else {newIndex = images.length-1}
    
  }
   this.setState({
     currentImageIndex : newIndex
    });
}

// setInterval( () => {

//     this.setState({
//       currentImageIndex : currentImageIndex+1;
//     })
// }, 1000 );


  render() {
    const { images, currentImageIndex } = this.state;
    const { position } = this.props;
    const { nextSlider } = this;

    const classes = classNames(
      position,
    );

    return (
      <div>
        {/* <Icon name="angle-double-left"></Icon> */}
        <Button data-direction="back" onClick={nextSlider}>Back</Button>
        <Image
        width={350} height={200}
        src = {images[currentImageIndex]}
        />
        <Button data-direction="next" onClick={nextSlider}>Next</Button>
        {/* <Icon name="angle-double-right" onClick={nextSlider}></Icon> */}
      
    </div>
    );
  }
}

export default Slides;

