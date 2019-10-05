import React, { Component } from "react";
import styles from "./Person.css";

class Person extends Component {
  render() {
    const { name, age, children, click, change } = this.props;
    return (
      <div className={styles.person} onClick={click}>
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

export default Person;
