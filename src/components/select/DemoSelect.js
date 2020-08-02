import React from 'react';
import Select from './Select';
import Option from './Option';
import SelectControl from './SelectControl';

class DemoSelect extends React.Component {
  state = {
    dropdownOptions:[
      { key: 'audi', value: 'audi' },
      { key: 'volvo', value: 'volvo' },
      { key: 'saab', value: 'saab' },
      { key: 'mercedes', value: 'mercedes' }
    ]
  };

  render() { 
    const { dropdownOptions } = this.state;

  return(
    <>
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '20px' }}>
      <h2><span>Select</span></h2>
      <Select name="cars" id="cars">
          <Option value="volvo">Volvo</Option>
          <Option value="saab">Saab</Option>
          <Option value="mercedes">Mercedes</Option>
          <Option value="audi">Audi</Option>
      </Select>
  
      <h2><span>SelectControl</span></h2>
            <SelectControl  id="selectCars"
              name='selectOption'
              options={dropdownOptions}
            />
      </div>
    </>
  )
}
};

export default DemoSelect;
