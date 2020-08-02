import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SelectControl = ({ className,  label, name, options,  ...attrs}) => {
  const classes = classNames(
    className,
  );

  return (
    <>
      {label && <label htmlFor={name}>{label}</label> }
      <select id={name} name={name} {...attrs}>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          )
        })}
      </select>     
    </>
  );
};

SelectControl.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array
};

SelectControl.defaultProps = {
  className: '',
  label: '',
  name: '',
  options:[],
};

export default SelectControl;