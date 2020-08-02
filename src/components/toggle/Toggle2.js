import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../button/Button';

import './Toggle.css';

export const Toggler = ({ children, label, action, value, 
  className,   vertical,   ...attrs
}) => {
  const classes = classNames(
    'toggler',
    className,
    { vertical },
  );

    return(
        <div>
            <div>{ label }</div>
            <div className="togglerContainer" className={classes} {...attrs} >
                {
                    React.Children.map( children, ( ChildItem ) => {
                        if( React.isValidElement( ChildItem ) ){
                            return React.cloneElement( ChildItem, {
                                action: action,
                                active: ChildItem.props.value === value
                            })
                        } else {
                            console.error('Element not valid', ChildItem );
                            return null;
                        }
                    })
                }
            </div>
        </div>
    )
}

Toggler.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  active: PropTypes.bool,
  value: PropTypes.string,
  className: PropTypes.string,
  vertical: PropTypes.bool,
};

Toggler.defaultProps = {
  children: null,
  label: '',
  active: false,
  value: '',
  className: '',
  vertical: false,
};

export const TogglerItem = ({ className, action, value, active}) => {
  const classes = classNames(
    className,
  );
    return(
        <Button
            type="button"
            onClick={action(value) }
            className={ active ? "togglerItem active" : "togglerItem"} >
            {value}
        </Button>
    )
}

TogglerItem.propTypes = {
  className: PropTypes.string,
  action: PropTypes.func,
  value: PropTypes.string,
  active: PropTypes.bool,
};

TogglerItem.defaultProps = {
  className: '',
  action: () => {},
  value: '',
  active: false,
};