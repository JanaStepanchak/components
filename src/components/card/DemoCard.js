import React from 'react';

import Card from '../card/Card';
import CardType2 from '../card/CardType2';
import DemoCardType3 from '../card/DemoCardType3';

import './Card.css';

class DemoCard extends React.Component {

	render() {
		return(
		<>
			<h2><span>CardType3</span></h2>
			<div class="resume-wrap">
				<DemoCardType3></DemoCardType3>
			</div>

  			<h2><span>Card</span></h2>
			<div class="post-wrap">
				<Card icon="angle-double-left"
				href= {'#'}
				cardName="Activity"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat a quam non blandit. </Card>

				<Card icon="angle-double-left"
				href= {'#'}
				cardName="Camping"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat a quam non blandit. </Card>
			</div>

			<h2><span>CardType2</span></h2>
			<div class="post-wrap">
				<CardType2
				href={""}
				src={"https://html5book.ru/wp-content/uploads/2017/06/blue-image-3.jpg"} 
				postDate={18, 2018}
				postCat="Lorem ipsum"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</CardType2>

				<CardType2
				href={""}
				src={"https://html5book.ru/wp-content/uploads/2017/06/blue-image-1.jpg"} 
				postDate={18, 2018}
				postCat="Lorem ipsum"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</CardType2>
			</div>
  </>
);
}
};

export default DemoCard;