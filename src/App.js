import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons : [
      { id: 'sadf', name: 'Arul Malar', age: 4 },
      { id: '23jk', name: 'Ilamaran', age: 3 },
      { id: 'werf', name: 'Shobana', age: 33 }
    ],
    togglePerson: false
    }

  togglePersonHandler = () => {
    this.setState(state => ({
      togglePerson: !state.togglePerson
    }))
  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1)
    this.setState({
      persons
    })
  }

  changeHandler = (e, id) => {
    const {persons: personsFromState} = this.state;
    const personIndex = personsFromState.findIndex(p => p.id === id);
    const person = {...personsFromState[personIndex], name: e.target.value}
    const persons = personsFromState.slice();
    persons[personIndex] = person;
    this.setState({persons});
  }

  render() {
    const { 
      persons, 
      togglePerson
    } = this.state;
    let classes = [];
    if(persons.length <= 2) {
      classes = ['orange'];
    }
    if (persons.length <=1) {      
      classes = ['red bold'];
    }    
    const style = {
      backgroundColor: 'green',
      color: '#fff',
      font: 'inherit',
      border: '1px solid blue',
      borderRadius: '5px',
      cursor: 'pointer',
      padding: '8px'
    };
    if (togglePerson) {
      style.backgroundColor = "red";
    }
    let Persons = persons.length > 0 ? persons.map(
      (person, index) => 
        <Person
          key={person.id}
          click={() => this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          change={
            (e) => this.changeHandler(e, person.id)
          } />
    ) : <p className={classes.join(' ')}>No Data to Display</p>
    return (
      <div className="App">
        <h1>I am new to react</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Person</button>
        {togglePerson && (
          <div>{Persons}</div>          
        )}        
      </div>
    ); 
  }   
}

export default App;
