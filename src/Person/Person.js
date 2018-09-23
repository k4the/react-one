import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm a person, my name is {props.name}. I am {props.age} years old</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default person;
