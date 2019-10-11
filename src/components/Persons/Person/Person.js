import React, { Component } from "react";
import styles from "./Person.css";
import PropTypes from "prop-types";
import AuthContext from '../../../context/authContext'

class Person extends Component {
  static contextType = AuthContext;
  render() {
    const {
      name,
      age,
      children,
      click,
      change
    } = this.props;
    return (
      <div className={styles.person} onClick={click}>
        <p>{this.context.isAuthenticated ? "Authenticated" : "Please Log In"}</p>
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

export default Person;
