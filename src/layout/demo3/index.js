import React from 'react';
import DemoListGrup from '../../components/list-group/DemoListGrup';
import DemoTable from '../../components/table/DemoTable';
import TabBar from '../../components/tabbar/TabBar';
import TabBarItem from '../../components/tabbar/TabBarItem';
import Slides from '../../components/slides/Slides';

const Demo = () => (
  <>  
  <h2><span>Tabbar</span></h2>
    <TabBar >
      <TabBarItem label="Slides">
      <h2><span className="span-group">Demo slides</span></h2>
        <Slides />
      </TabBarItem>
      <TabBarItem label="List">
        <h2><span className="span-group"> Demo list</span></h2>
        <div  className="demo-group"><DemoListGrup /></div></TabBarItem>
      <TabBarItem label="Table">
        <h2><span className="span-group"> Demo table</span></h2>
        <div  className="demo-group"><DemoTable /></div>
        </TabBarItem>
    </TabBar>
  </>
);

export default Demo;
