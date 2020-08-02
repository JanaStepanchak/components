import React from 'react';

import CardType3 from './CardType3';
import Loader from '../loader/Loader';

import './Card.css';

class DemoCardType3 extends React.Component {

	state = {
		resumes: [],
		loaded: false
	};
  
	componentDidMount = () => {
	  fetch('http://www.json-generator.com/api/json/get/bUQnJKdKtK?indent=2')
	  .then( resume => resume.json() )
	  .then( resume => {
		  this.setState({
			resumes: resume
		  })
	  })
	  this.setState({
		loaded: true
	  })
	  
	};

	render = () => {
		const { resumes , loaded } = this.state;

		if( !loaded ){
			console.log("render 1" );
			return(
				<div class="resume-wrap">
					<Loader loaded/>
				</div>
				 );
		} else {
			return(
				<div class="resume-wrap">
					{resumes.map(resume => (
						<CardType3 
							imageSrc={''}
							imgAlt={''}
							resumeName={resume.name}
							resumeProfession={resume.profession}
							valueInput={resume.valueInput}
						>
						</CardType3>
			))}
				</div>
			)
		}
	}
};

export default DemoCardType3;