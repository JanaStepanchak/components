import React from 'react';
import DemoBreadCrumbs from '../../components/breadCrumbs/DemoBreadCrumbs';
import DemoButton from '../../components/button/DemoButton';
import DemoConfirm from '../../components/confirm/DemoConfirm';
import DemoModal from '../../components/modal/DemoModal';
import DemoTogler from '../../components/toggle/DemoToggler';


import './demo.css';

const Demo = () => (
  <>
  <h2><span className="span-group"> BreadCrumbs</span></h2>
  <div  className="demo-group"> <DemoBreadCrumbs /> </div>

  <h2><span className="span-group">Button</span></h2>
  <div  className="demo-group"> <DemoButton /> </div> 

  <h2><span className="span-group"> Togler</span></h2>  
  <div  className="demo-group"><DemoTogler /></div>

  <h2><span className="span-group"> Dialog (Confirm & Modal) window</span></h2>
  <div  className="demo-group"><DemoConfirm /><DemoModal /></div>



  </>
);

export default Demo;
