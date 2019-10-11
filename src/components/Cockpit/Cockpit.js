import React, { useEffect, useRef } from "react";
import styles from "./Cockpit.css";
import AuthContext from "../../context/authContext";

const Cockpit = ({
  title,
  personsLength,
  togglePerson,
  togglePersonHandler
}) => {
  const buttonRef = useRef(null);
  useEffect(() => {
    console.log("[Cockpit.js] useEffect called - componentDidMount");
    const timerId = setTimeout(() => buttonRef.current.click(), 2000);
    return () => {
      clearTimeout(timerId);
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
      <AuthContext.Consumer>
        {({ authenticateHandler, isAuthenticated }) => (
          <button
            disabled={!togglePerson}
            className={styles["ml-10"]}
            onClick={authenticateHandler}
          >
            {isAuthenticated ? "Log Out" : "Log In"}
          </button>
        )}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(Cockpit);
