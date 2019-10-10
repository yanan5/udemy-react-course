import React, { useEffect, useRef } from "react";
import styles from "./Cockpit.css";

const Cockpit = ({
  title,
  personsLength,
  togglePerson,
  togglePersonHandler,
  authenticateHandler,
  isAuthenticated
}) => {
  const buttonRef = useRef(null);
  useEffect(() => {
    console.log("[Cockpit.js] useEffect called - componentDidMount");
    setTimeout(() => buttonRef.current.click(), 2000);
    return () => {
      console.log("[Cockpit.js] return from componentDidMount useEffect");
    };
  }, []);
  useEffect(() => {
    console.log("[Cockpit.js] useEffect called - componentDidUpdate");

    return () => {
      console.log("[Cockpit.js] return from componentDidUpdate useEffect");
    };
  }, [personsLength]);
  useEffect(() => {
    console.log("[Cockpit.js] useEffect called - ALWAYS");

    return () => {
      console.log("[Cockpit.js] return from ALWAYS useEffect");
    };
  });
  console.log("[Cockpit.js] called");
  let classes = [];
  if (personsLength <= 2) {
    classes = [styles.orange];
  }
  if (personsLength <= 1) {
    classes = [styles.red, styles.bold];
  }
  return (
    <div className={styles.Cockpit}>
      <h1>{title}</h1>
      <p className={classes.join(" ")}>This is really working</p>
      <button
        ref={buttonRef}
        className={togglePerson ? styles.Red : null}
        onClick={togglePersonHandler}
      >
        Toggle Person
      </button>
      <button
        disabled={!togglePerson}
        className={styles["ml-10"]}
        onClick={authenticateHandler}
      >
        {isAuthenticated ? "Log Out" : "Log In"}
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
