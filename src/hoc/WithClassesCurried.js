import React from "react";

const WithClassesCurried = (WrappedComponent, className) => props => (
  <div className={className}>
    <WrappedComponent {...props} />
  </div>
);

export default WithClassesCurried;
