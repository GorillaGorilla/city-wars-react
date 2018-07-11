import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './layout/Layout';
import Login from './login/Login';
import Register from './register/Register';
import PrivateRoute from './private-route/PrivateRoute';
import './App.css';

const App = props => (
  <div className="App">
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/game" component={Layout} />
    </Switch>
    <p className="unsupported">
      This browser does not support CSS-Grid, please use an alternative browser.
      <a href="https://caniuse.com/#search=css%20grid"> See a list of supported browsers</a>
    </p>
  </div>
);

function mapStateToProps({ user }) {
  return { user };
}

// export default connect(mapStateToProps)(App);
export default App;
