import React from 'react';
import BreadCrumbs from './BreadCrumbs ';


class DemoBreadCrumbs extends React.Component {
  state = {
    breadCrumbsItems : [
      { name: 'Home', link: '/'},
      { name: 'Button', link: '/button'},
      { name: 'Icon', link: '/icon'},
    ]
  };

  render() { 
    const { breadCrumbsItems } = this.state;

  return(
    <>
    <BreadCrumbs items={breadCrumbsItems} 
    />
  </>
  )
}
};

export default DemoBreadCrumbs;