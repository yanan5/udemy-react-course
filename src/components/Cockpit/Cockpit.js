import React, { useEffect } from "react";
import styles from "./Cockpit.css";

const Cockpit = ({ title, persons, togglePerson, togglePersonHandler }) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect called - componentDidMount");
    return () => {
      console.log("[Cockpit.js] return from componentDidMount useEffect");
    };
  }, []);
  useEffect(() => {
    console.log("[Cockpit.js] useEffect called - componentDidUpdate");

    return () => {
      console.log("[Cockpit.js] return from componentDidUpdate useEffect");
    };
  }, [persons]);
  useEffect(() => {
    console.log("[Cockpit.js] useEffect called - ALWAYS");

    return () => {
      console.log("[Cockpit.js] return from ALWAYS useEffect");
    };
  });
  console.log("[Cockpit.js] called");
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
