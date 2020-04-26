import React from 'react';

import InputType from './InputType';
import PropTypes from 'prop-types';

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <InputType
          type='name'
          name='name'
          label='name'
          placeholder='enter your name'
          value={props.values.name}
          onChange={props.handleForm}
        />

        <InputType
          type='email'
          name='email'
          label='email'
          placeholder='enter your email'
          value={props.values.email}
          onChange={props.handleForm}
        />

        <InputType
          type='password'
          name='password'
          label='password'
          placeholder='enter your password'
          value={props.values.password}
          onChange={props.handleForm}
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

Form.propTypes = {
  handleForm: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
