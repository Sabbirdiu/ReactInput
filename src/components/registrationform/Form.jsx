import React from 'react';
import PropTypes from 'prop-types';
import InputType from './InputType';

const Form = ({
  values,
  handleChange,
  handleSubmit,
  agreement,
  handleAgreement,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputType
          type='text'
          name='fullname'
          label='name'
          placeholder='enter your name'
          value={values.fullname}
          onChange={handleChange}
        />
        <InputType
          type='text'
          id='username'
          placeholder='Enter your username'
          label='Username'
          name='username'
          value={values.username}
          onChange={handleChange}
        />
        <InputType
          type='email'
          id='email'
          placeholder='Enter your email'
          label='Email'
          name='email'
          value={values.email}
          onChange={handleChange}
        />
        <InputType
          type='password'
          placeholder='password'
          label='Password'
          name='password'
          value={values.password}
          onChange={handleChange}
        />
        <InputType
          type='password'
          placeholder='confirm password'
          label='Confirm Password'
          name='confirmpassword'
          value={values.confirmpassword}
          onChange={handleChange}
        />
        <div>
          <label htmlFor=''>
            <input
              type='radio'
              name='gender'
              value='Male'
              onChange={handleChange}
            />
            Male
            <input
              type='radio'
              name='gender'
              value='Feale'
              onChange={handleChange}
            />
            Female
            <input
              type='radio'
              name='gender'
              value='Other'
              onChange={handleChange}
            />
            Others
          </label>
        </div>
        <div>
          <label htmlFor=''>
            <input
              type='checkbox'
              name='agreement'
              checked={agreement}
              onChange={handleAgreement}
            />
            Agree with this term
          </label>
        </div>

        <button type='submit' disabled={!agreement}>
          Submit
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  values: PropTypes.object.isRequired,
  agreement: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAgreement: PropTypes.func.isRequired,
};

export default Form;
