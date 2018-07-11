import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../actions/users';
import './login.css';

class Login extends Component {

  constructor() {
    super();
    this.state = { name: '', password: '' };
  }
  login() {
    const { name, password } = this.state;
    this.props.login({ name, password });
  }

  render() {
    // if (this.props.user.authenticated) {
    //   return <Redirect to="/game" />;
    // }
    return (
      <div className="login">
        <h1>Login</h1>
        <label>Name</label>
        <input className="input" value={this.state.name} onChange={event => this.setState({ name: event.target.value })} />
        <label>Password</label>
        <input className="input" type="password" value={this.state.password} onChange={event => this.setState({ password: event.target.value })} />
        <button className="submit" onClick={() => this.login()}>Submit</button>
      </div>);
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, { login })(Login);
