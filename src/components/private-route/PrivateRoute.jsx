import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = { ...rest };
  return (<Route
    {...rest}
    render={props => (
      (user.authenticated === true)
        ? (<Component {...props} />)
        : (<Redirect to="/login" />)
    )}
  />
  );
};

function mapStateToProps({ user }) {
  return { user };
}
export default connect(mapStateToProps, null, null, { pure: false })(PrivateRoute);
