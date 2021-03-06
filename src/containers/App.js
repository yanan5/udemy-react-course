import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClassesCurried from "../hoc/WithClassesCurried";
import Auxillary from "../hoc/Auxillary";
import AuthContext from "../context/authContext";

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
      togglePerson: false,
      toggleCockPit: true,
      isAuthenticated: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps called", props, state);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount called");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(props, state) {
    console.log("[App.js] componentDidUpdate");
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

  handleAuthentication = () =>
    this.setState(state => ({
      isAuthenticated: !state.isAuthenticated
    }));

  render() {
    console.log("[App.js] render called");
    const {
      persons,
      togglePerson,
      toggleCockPit,
      isAuthenticated
    } = this.state;

    let PersonsList = (
      <Persons
        persons={persons}
        deletePersonHandler={this.deletePersonHandler}
        changeHandler={this.changeHandler}
      />
    );
    return (
      <Auxillary>
        <button
          onClick={() =>
            this.setState({ toggleCockPit: !this.state.toggleCockPit })
          }
        >
          Toggle CockPit
        </button>
        <AuthContext.Provider
          value={{
            isAuthenticated,
            authenticateHandler: this.handleAuthentication
          }}
        >
          {toggleCockPit && (
            <Cockpit
              title={this.props.appTitle}
              personsLength={persons.length}
              togglePerson={togglePerson}
              togglePersonHandler={this.togglePersonHandler}
            />
          )}
          {togglePerson && PersonsList}
        </AuthContext.Provider>
      </Auxillary>
    );
  }
}

export default WithClassesCurried(App, styles.App);
