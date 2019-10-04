import React, { Component } from "react";
import Person from "./Person/Person";
import styles from "./App.css";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: "sadf", name: "Arul Malar", age: 4 },
      { id: "23jk", name: "Ilamaran", age: 3 },
      { id: "werf", name: "Shobana", age: 33 }
    ],
    togglePerson: false
  };

  togglePersonHandler = () => {
    this.setState(state => ({
      togglePerson: !state.togglePerson
    }));
  };

  deletePersonHandler = index => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({
      persons
    });
  };

  changeHandler = (e, id) => {
    const { persons: personsFromState } = this.state;
    const personIndex = personsFromState.findIndex(p => p.id === id);
    const person = { ...personsFromState[personIndex], name: e.target.value };
    const persons = personsFromState.slice();
    persons[personIndex] = person;
    this.setState({ persons });
  };

  render() {
    const { persons, togglePerson } = this.state;
    let classes = [];
    if (persons.length <= 2) {
      classes = [styles.orange];
    }
    if (persons.length <= 1) {
      classes = [styles.red, styles.bold];
    }
    let Persons =
      persons.length > 0 ? (
        persons.map((person, index) => (
          <ErrorBoundary 
            key={person.id}>
            <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              change={e => this.changeHandler(e, person.id)}
            />
          </ErrorBoundary>
        ))
      ) : (
        <p className={classes.join(" ")}>No Data to Display</p>
      );
    return (
        <div className={styles.App}>
          <h1>I am new to react</h1>
          <p className={classes.join(" ")}>This is really working</p>
          <button className={togglePerson ? styles.Red: null} onClick={this.togglePersonHandler}>
            Toggle Person
          </button>
          {togglePerson && <div>{Persons}</div>}
        </div>
    );
  }
}

export default App;
