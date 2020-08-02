
import React from 'react';
import Input from './Input';

const Sandbox = () => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '20px' }}>

    <h2><span>Input type text</span></h2>
    <Input id="text" type="text" />

    <h2><span>Input type password with error</span></h2>
    <Input id="password" error="wrong password" type="password" />

    <h2><span>Input type checkbox </span></h2>
    <div className="input-box">
    <Input id="checkbox" checked onChange={() => {}} type="checkbox" />
    <Input id="checkbox" disabled onChange={() => {}} type="checkbox" />
    <Input id="checkbox" onChange={() => {}} type="checkbox" />
    </div>

    <h2><span>Input type radio</span></h2>
    <div className="input-box">
    <Input id="radio" checked onChange={() => {}} type="radio" />
    <Input id="radio" onChange={() => {}} type="radio" />
    <Input id="radio" onChange={() => {}} type="radio" />
    </div>

    <h2><span>Input type file </span></h2>
    <Input id="file" label="file" required type="file" />
  </div>
);

export default Sandbox;