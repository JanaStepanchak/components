import React from 'react';
import Button from './Button';

const DemoButton = () => (
  <>
    <h2><span>size: medium (default), small, large</span></h2>
    <Button type='primary' size='medium' onClick={() => { console.log('Woohoo!'); }}> Woohoo! </Button>

    <h2><span> status: active (default), disabled </span></h2>
    <Button size='small' disabled /> <Button size='large' active />    

  </>
);

export default DemoButton;