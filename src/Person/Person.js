import React from "react";
import Radium from "radium";
import "./Person.css";

const Person = ({ name, age, children, click, change }) => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px"
    }
  };
  return (
    <div className="person" onClick={click} style={style}>
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

export default Radium(Person);
