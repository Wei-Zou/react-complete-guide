import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  });

  const [otherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // React Hook's update state function replace state, instead of merge states.
    setPersonsState({
      persons: [
        { name: 'Maxilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age} />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        onClick={switchNameHandler}>
          My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age} />
    </div>
  );
};

export default app;
