import React, { Component } from 'react';
import Form from './Form';

const initValues = {
  fullname: '',
  username: '',
  email: '',
  password: '',
  confirmpassword: '',
  gender: '',
};

export class Index extends Component {
  state = {
    values: initValues,
    agreement: false,
  };

  handleChange = (e) => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    });
  };
  hadleAgreement = (e) => {
    this.setState({
      agreement: e.target.checked,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
    this.setState({ values: initValues, agreement: false });
  };

  render() {
    return (
      <div>
        <h1 className='text-center'>Split Registration Form</h1>
        <div className='card p-5 '>
          <Form
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleAgreement={this.hadleAgreement}
            values={this.state.values}
            agreement={this.state.agreement}
          />
        </div>
      </div>
    );
  }
}

export default Index;
