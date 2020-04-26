import React from 'react';
import PropTypes from 'prop-types';

const InputType = (props) => {
  return (
    <div className='form-group'>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        className='form-control'
        type={props.type}
        label={props.label}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

InputType.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputType;
InputType.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
};
