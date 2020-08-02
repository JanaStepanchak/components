import React, { Component } from 'react';
import Pagination from './Pagination';
import Button from '../button/Button';

class DemoPagination extends Component {
  state = {
    switchOn: true,
  }

  handleSwitchOn = () => {
    this.setState({ switchOn: true });
  }

  handleSwitchOff = () => {
    this.setState({ switchOn: false });
  }

  render() {
    const { switchOn } = this.state;

    return (
      <>
        
        <h2><span>Pagination:</span></h2>
        <Pagination>
          <Button onClick={this.handleSwitchOn} active={switchOn}>1</Button>
          <Button onClick={this.handleSwitchOff} >2</Button>
          <Button onClick={this.handleSwitchOff} >3</Button>
        </Pagination>
      </>
    );
  }
}

export default DemoPagination;