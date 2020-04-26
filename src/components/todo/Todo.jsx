import React, { Component } from 'react';

export class Todo extends Component {
  state = {
    name: '',
    country: '',
    bio: '',
    birthday: '',
    gender: '',
    agree: false,
    skills: [],
  };

  formInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleChange = (e) => {
    this.setState({
      agree: e.target.checked,
    });
  };
  skillChange = (e) => {
    if (e.target.checked) {
      this.setState({
        skills: [...this.state.skills, e.target.value],
      });
    } else {
      const skills = this.state.skills.filter(
        (skill) => skill !== e.target.value
      );
      this.setState({ skills });
    }
  };
  formSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    //reset
    e.target.reset();
    this.setState({
      name: '',
      bio: '',
      birthday: '',
      country: '',
      gender: '',
      skills: '',
      agree: '',
    });
  };

  render() {
    //distructure the  value
    const { name, country, bio, birthday, agree, skills } = this.state;

    return (
      <div className=' container card p-5'>
        <form onSubmit={this.formSubmit} action=''>
          <input
            className='form-control'
            type='text'
            placeholder='enter your name'
            name='name'
            value={name}
            onChange={this.formInput}
          />
          <select
            className='form-control my-2'
            name='country'
            value={country}
            onChange={this.formInput}
          >
            <option value='Select'>Select</option>
            <option value='Bangladesh'>Bangladesh</option>
            <option value='India'>India</option>
          </select>

          <textarea
            className='form-control my-2'
            type='message'
            placeholder='write your bio'
            name='bio'
            value={bio}
            onChange={this.formInput}
          ></textarea>
          <input
            className='form-control my-2'
            type='date'
            name='birthday'
            value={birthday}
            onChange={this.formInput}
          />

          <div className='my-2'>
            <p>Gender</p>
            <input
              type='radio'
              name='gender'
              value='male'
              onChange={this.formInput}
            />
            Male
            <input
              type='radio'
              name='gender'
              value='female'
              onChange={this.formInput}
            />
            Female
            <input
              type='radio'
              name='gender'
              value='3rd gender'
              onChange={this.formInput}
            />
            3rd gender
          </div>

          <div className='my-2'>
            <input
              type='checkbox'
              name='skills'
              value='python'
              checked={skills.includes('python')}
              onChange={this.skillChange}
            />
            Python
            <input
              type='checkbox'
              name='skills'
              value='Django'
              checked={skills.includes('Django')}
              onChange={this.skillChange}
            />
            Django
            <input
              type='checkbox'
              name='skills'
              value='php'
              checked={skills.includes('php')}
              onChange={this.skillChange}
            />
            php
            <input
              type='checkbox'
              name='skills'
              value='laravel'
              checked={skills.includes('laravel')}
              onChange={this.skillChange}
            />
            laravel
            <input
              type='checkbox'
              name='skills'
              value='Javascript'
              checked={skills.includes('Javascript')}
              onChange={this.skillChange}
            />
            Javascript
          </div>

          <div>
            <input
              className='my-2'
              type='checkbox'
              name='agree'
              checked={agree}
              onChange={this.handleChange}
            />
            i agree this condition
          </div>

          <button className='my-2 btn btn-primary' type='submit'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Todo;
