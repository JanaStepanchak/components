import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../icon/Icon';
import Button from '../button/Button';

import './Confirm.css';

const Confirm = ({ title, message, closeMessage, disabled, textarea, children, 
  isOpen, onCancel, onSubmit, 
}) => {
  return (
    <>
      { isOpen &&
        <div>
          <div className="confirmOverlay">
            <div className="confirmWindow">
            <div className="confirmHeader">
                <div className="confirmTitle">{title}</div>
                <Icon name="times" onClick={onCancel} />
            </div>
            <div className="confirmBody">
                {children}
                {textarea
                  && (
                    <>
                    <textarea 
                      className="confirmTextarea" >
                    </textarea>
                    </>
                    )}
            </div>            
            
            <div className="confirmFooter"  disabled={disabled}>
              {textarea
              && (
                <>
                  {message}
                  <Button 
                  size="medium" 
                  onClick={onSubmit} 
                  > 
                  {closeMessage} 
                  </Button>
                </>
                )
              }
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

Confirm.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  textarea: PropTypes.bool,
};

Confirm.defaultProps = {
  title: 'Confirm title',
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
  children: null,
  disabled: true,
  textarea: false,
  // value:'',
};

export default Confirm;
