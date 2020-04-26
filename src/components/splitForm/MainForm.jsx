import React, { Component } from 'react';
import Form from './Form';
export class MainForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };
  handleForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    e.target.reset();
    this.setState({ name: '', email: '', pssword: '' });
  };
  render() {
    return (
      <div>
        <h1 className='text-center my-2'>Split Form</h1>
        <Form
          values={this.state}
          handleForm={this.handleForm}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default MainForm;
