import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Ellie', age: 27 },
      { id: '2', name: 'Ruby', age: 20 },
      { id: '3', name: 'Suerte', age: 90 }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };
  render() {
    const style = {
      backgroundColor: 'green',
      border: '1px solid purple',
      padding: '6px 12px',
      textTransform: 'upperCase',
      color: 'white',
      cursor: 'pointer'
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                change={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
        <div className="App">
          <h1>Hi React</h1>
          <p className={classes.join(' ')}>Some stuff</p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Toggle
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
