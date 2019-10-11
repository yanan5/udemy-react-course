import React from 'react';

const AuthContext = React.createContext({
  isAuntenticated: false,
  login: () => {}
})

export default AuthContext;
