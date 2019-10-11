import React from 'react';
import AuthContext from "../context/authContext";

const withAuthentication = Component => props => (
  <AuthContext.Consumer>
    {context => <Component {...props} context={context} />}
  </AuthContext.Consumer>
);

export default withAuthentication;
