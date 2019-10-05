import React from "react";
import styles from "./Cockpit.css";

const Cockpit = ({ title, persons, togglePerson, togglePersonHandler }) => {
  let classes = [];
  if (persons.length <= 2) {
    classes = [styles.orange];
  }
  if (persons.length <= 1) {
    classes = [styles.red, styles.bold];
  }
  return (
    <div className={styles.Cockpit}>
      <h1>{title}</h1>
      <p className={classes.join(" ")}>This is really working</p>
      <button
        className={togglePerson ? styles.Red : null}
        onClick={togglePersonHandler}
      >
        Toggle Person
      </button>
    </div>
  );
};

export default Cockpit;
