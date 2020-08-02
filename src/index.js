import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Demo from './layout/demo/';
import Demo2 from './layout/demo2/';
import Demo3 from './layout/demo3/';
import Demo5 from './layout/demo5/';


import DemoCard from './components/card/DemoCard';
// import DemoBreadCrumbs from './components/breadCrumbs/DemoBreadCrumbs';
// import DemoButton from './components/button/DemoButton';
// import DemoConfirm from './components/confirm/DemoConfirm';
// import DemoModal from './components/modal/DemoModal';

// import Icon from './components/icon/Icon';
// import Image from './components/image/Image';

// import DemoInput from './components/input/DemoInput';
// import DemoSelect from './components/select/DemoSelect';
// import DemoSlides from './components/slides/DemoSlides';

// import DemoListGrup from './components/list-group/DemoListGrup';
// import DemoTable from './components/table/DemoTable';
// import DemoTabBar from './components/tabbar/DemoTabBar';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
      <Route path="/demo" component={Demo} />
      <Route path="/demo2" component={Demo2} />
      <Route path="/demo3" component={Demo3} />
      <Route path="/card" component={DemoCard} />
      <Route path="/demo5" component={Demo5} />

        {/* <Route path="/breadCrumbs" component={DemoBreadCrumbs} /> */}
        {/* <Route path="/button" component={DemoButton} /> */}
        {/* <Route path="/confirm" component={DemoConfirm} /> */}
        {/* <Route path="/modal" component={DemoModal} /> */}
        
        {/* <Route path="/icon" component={Icon} /> */}
        {/* <Route path="/image" component={Image} /> */}
        {/* <Route path="/input" component={DemoInput} />   */}
        {/* <Route path="/select" component={DemoSelect} />   */}
        {/* <Route path="/slides" component={DemoSlides} /> */}

        {/* <Route path="/list-group" component={DemoListGrup} />   */}
        {/* <Route path="/table" component={DemoTable} />            */}
        {/* <Route path="/tabbar" component={DemoTabBar} /> */} 

      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
