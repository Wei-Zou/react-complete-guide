import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor () {
    super();
    this.state = {
      persons: [
        { id: 'person1', name: 'Max', age: 28 },
        { id: 'person2', name: 'Manu', age: 29 },
        { id: 'person3', name: 'Stephanie', age: 26 }
      ]
    };
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === personId);
    if (personIndex === -1) {
      return;
    }

    const person = { ...this.state.persons[personIndex], name: event.target.value };
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) =>
              <Person
                onClick={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                onChange={(event) => this.nameChangedHandler(event, person.id)} />)
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
};

export default App;
