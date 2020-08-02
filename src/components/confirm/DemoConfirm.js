import React, { Component } from 'react';
import Confirm from './Confirm';
import Button from '../button/Button';

class DemoConfirm extends Component {
  state = {
    isOpen: false    
  }

  openConfirm = () => {
    this.setState({ isOpen: true });
  }

  handleSubmit = () => {
    this.setState({ isOpen: false });
  }

  handleCancel = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const {openConfirm , handleCancel , handleSubmit} = this;
    const {isOpen} = this.state;
    return (
      <>
        <Button onClick={openConfirm}>Show confirm</Button>
        <Confirm
            title="Do smsng important"
            message="Are you sure?"
            closeMessage="Back to smsng else"
            textarea        
          isOpen={isOpen}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        >
        </Confirm>
      </>
    );
  }
}

export default DemoConfirm;
