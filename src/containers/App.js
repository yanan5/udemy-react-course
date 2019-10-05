import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

import styles from "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor called");
    this.state = {
      persons: [
        { id: "sadf", name: "Arul Malar", age: 4 },
        { id: "23jk", name: "Ilamaran", age: 3 },
        { id: "werf", name: "Shobana", age: 33 }
      ],
      togglePerson: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps called", props, state);
    return state;
  }

  componentWillMount() {
    console.log("[App.js] componentWillMount called");
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount called");
  }

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
    console.log("[App.js] render called");
    const { persons, togglePerson } = this.state;

    let PersonsList = (
      <Persons
        persons={persons}
        deletePersonHandler={this.deletePersonHandler}
        changeHandler={this.changeHandler}
      />
    );
    return (
      <div className={styles.App}>
        <Cockpit
          title={this.props.appTitle}
          persons={persons}
          togglePerson={togglePerson}
          togglePersonHandler={this.togglePersonHandler}
        />
        {togglePerson && PersonsList}
      </div>
    );
  }
}

export default App;
