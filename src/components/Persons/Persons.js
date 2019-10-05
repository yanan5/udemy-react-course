import React from "react";
import Person from "./Person/Person";

const Persons = ({ persons, deletePersonHandler, changeHandler }) => {
  console.log('[Persons.js] called')
  return persons.length > 0 ? (
    persons.map((person, index) => (
      <Person
        key={person.id}
        click={() => deletePersonHandler(index)}
        name={person.name}
        age={person.age}
        change={e => changeHandler(e, person.id)}
      />
    ))
  ) : (
    <p>No Data to Display</p>
  );
};
export default Persons;
