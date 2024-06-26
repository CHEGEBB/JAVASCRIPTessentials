//Just like in HTML, React uses forms to allow users to interact with the web page.
//Forms are used to collect user input.
//In React, forms are used to collect user input.
//In the below example we are creating a form with a text input field.
//We are using the onChange event to handle the input field.

import React from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  return (
    <form>
      <h1>Form</h1>
      <p>Enter your name:</p>
      <input
        type="text"
        onChange={(e) => console.log(e.target.value)}
      />
    </form>
  );
}
//This will work as normal, the form will submit and the page will refresh.
//These are the event handlers that we can use in React forms:

//onChange- to handle the input field
//onSubmit- to handle the form submission
//onFocus- to handle the focus event



//HANDLING FORM SUBMISSION
//To handle form submission, we need to use the onSubmit event.
//unlike html where form submission is handled by the DOM, in React, form submission is handled by components
import { useState } from "react";
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

//submitting the form we need to use the onSubmit event handler.
//The onSubmit event handler is used to handle the form submission.
import { useState } from "react";
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
//In React the value of a textarea is placed in a value attribute. We'll use the useState Hook to manage the value of the textarea
import { useState } from "react";
import ReactDOM from "react-dom/client";

function MyForm() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

//select is also different in React. In React, the value of a select is placed in a value attribute. We'll use the useState Hook to manage the value of the select.
import { useState } from "react";
import ReactDOM from "react-dom/client";

function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);