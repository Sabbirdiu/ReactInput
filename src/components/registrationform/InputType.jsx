import React from 'react';
import PropTypes from 'prop-types';

const InputType = (props) => {
  return (
    <div className='form-group'>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        className='form-control'
        type={props.type}
        id={props.id}
        label={props.label}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

InputType.propTypes = {
  type: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputType;
