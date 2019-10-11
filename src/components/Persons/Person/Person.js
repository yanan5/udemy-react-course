import React, { Component } from "react";
import styles from "./Person.css";
import PropTypes from "prop-types";
import withAuthentication from "../../../hoc/withAuthentication";

class Person extends Component {
  render() {
    const {
      name,
      age,
      children,
      click,
      change,
      context: { isAuthenticated }
    } = this.props;
    return (
      <div className={styles.person} onClick={click}>
        <p>{isAuthenticated ? "Authenticated" : "Please Log In"}</p>
        <p>
          I'm a {name} and I am {age} years old!.{" "}
          {children && `Hobby: ${children}`}
        </p>
        <input
          onClick={e => e.stopPropagation()}
          type="text"
          value={name}
          onChange={change}
        />
      </div>
    );
  }
}

PropTypes.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  children: PropTypes.object,
  click: PropTypes.func,
  change: PropTypes.func
};

export default withAuthentication(Person);
