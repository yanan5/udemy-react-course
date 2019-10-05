import React from "react";
import styles from "./Person.css";

const Person = ({ name, age, children, click, change }) => {
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
};

export default Person;
