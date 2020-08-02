import React from 'react';
import TabBar from '../../components/tabbar/TabBar';
import TabBarItem from '../../components/tabbar/TabBarItem';

import Icon from '../../components/icon/Icon'
import Button from '../../components/button/Button'
import Image from '../../components/image/Image';
import DemoSelect from '../../components/select/DemoSelect';
import DemoInput from '../../components/input/DemoInput';

const Demo3 = () => (
    <>

    <h2><span>Tabbar</span></h2>
    <TabBar>
      <TabBarItem label="Icon">
      <h2><span>Icon & Icons inside button</span></h2>
    <Icon size={2} name='atom' /> 
    <Button ><Icon name='align-right'/></Button>
    <h2><span>Icon with size & color</span></h2>
    <Icon title='badge' size={3} name='award' colorIcon ={"#F09EA3"} />
      </TabBarItem>

      <TabBarItem label="Image">        
    <h2><span>Image with src & circle Image</span></h2>
    <Image
      src="https://media.springernature.com/lw630/nature-cms/uploads/cms/pages/2913/top_item_image/cuttlefish-e8a66fd9700cda20a859da17e7ec5748.png"
      width={150} height={100}
    />
    {/* <h2><span>Circle Image</span></h2> */}
    <Image
      src="https://developer.here.com/tutorials/react/assets/create-react-app-initial-screenshot.png"
      width={90}
      height={90}
      circle
    />

      </TabBarItem>
      <TabBarItem label="Input">
        <DemoInput></DemoInput>
      </TabBarItem>
      <TabBarItem label="Select">
        <DemoSelect></DemoSelect>
      </TabBarItem>

    </TabBar>

  </>
);

export default Demo3;