import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return null;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldComponentUpdate");
  //   if(nextProps.persons !== this.props.persons) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(props, state, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
  }

  render() {
    const { persons, deletePersonHandler, changeHandler } = this.props;
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
  }
}
export default Persons;
