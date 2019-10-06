import React, { useEffect } from "react";
import styles from "./Cockpit.css";

const Cockpit = ({ title, persons, togglePerson, togglePersonHandler }) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log("[Cockpit.js] useEffect called - componentDidMount");
    }, 1000);
    return () => {
      clearTimeout(timerId);
      console.log("[Cockpit.js] return from componentDidMount useEffect");
    };
  }, []);
  useEffect(() => {
    const timeId = setTimeout(() => {
      console.log("[Cockpit.js] useEffect called - componentDidUpdate");
    }, 1000);
    return () => {
      clearTimeout(timeId);
      console.log("[Cockpit.js] return from componentDidUpdate useEffect");
    };
  }, [persons]);
  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log("[Cockpit.js] useEffect called - ALWAYS");
    }, 1000);
    return () => {
      clearTimeout(timerId);
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
