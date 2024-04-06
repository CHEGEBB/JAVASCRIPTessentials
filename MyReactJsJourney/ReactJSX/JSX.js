// JSX stands for JavaScript XML.

// JSX allows us to write HTML in React.

// JSX makes it easier to write and add HTML in React.


//example
import React from 'react';
import ReactDOM from 'react-dom/client';

const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

// With JSX you can write expressions inside curly braces { }.

// The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:

 import React from 'react';
import ReactDOM from 'react-dom/client';

const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);