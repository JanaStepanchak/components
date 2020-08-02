import React, { Component } from 'react';

import { Toggler, TogglerItem } from './Toggle2';

class DemoToggler extends Component {

	state = {
		layout: "left",
		gender: "male"
	}

	changeGender = ( value ) => (e) => {
		this.setState({
			gender: value
		});
	}

	changeLayout = ( value ) => (e) => {
		this.setState({
			layout: value
		});
	}

	render = () => {
		const { layout, gender } = this.state;
		const { changeGender, changeLayout } = this;
		return(
			<div >				
				<Toggler value={gender} label="Gender" action={changeGender}>
						<TogglerItem value="male" />
						<TogglerItem value="female" />	
				</Toggler>

				<Toggler value={layout} label="Layout" action={changeLayout}>		
						<TogglerItem value="left" />
						<TogglerItem value="center" />
						<TogglerItem value="right" />
						<TogglerItem value="baseline" />				
				</Toggler>
			</div>
		)
	}
}
export default DemoToggler;
