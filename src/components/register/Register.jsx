import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/users';
import './register.css';

class Register extends Component {
  constructor() {
    super();
    this.state = { name: '', password: '' };
  }

  onClickSubmit(event) {
    event.preventDefault();
    this.register();
  }

  register() {
    const { name, password } = this.state;
    this.props.register({ name, password });
    this.setState({ name: '', password: '' });
  }

  render() {
    const { name, password } = this.state;
    return (
      <form className="register">
        <h1>Register</h1>
        <label>Name</label>
        <input className="input" value={name} onChange={event => this.setState({ name: event.target.value })} />
        <label>Password</label>
        <input className="input" type="password" value={password} onChange={event => this.setState({ password: event.target.value })} />
        <button onClick={event => this.onClickSubmit(event)}>Submit</button>
      </form>);
  }
}


export default connect(null, { register })(Register);
