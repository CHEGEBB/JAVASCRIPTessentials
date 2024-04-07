// Just like HTML DOM events, React can perform actions based on user events.

// React has the same events as HTML: click, change, mouseover etc.
// Adding Events
// React events are written in camelCase syntax:
// onClick instead of onclick.
// React event handlers are written inside curly braces:
// onClick={shoot}  instead of onclick="shoot()".

// e.g
//  <button onClick={shoot}>Take the Shot!</button>

import React from 'react';
import ReactDOM from 'react-dom/client';

function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>//when the button is clicked, the shoot function is executed
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);

// Passing Arguments
// To pass an argument to an event handler, use an arrow function.

// e.g
//<button onClick={() => shoot('Goal')}>Take the shot!</button>

// The shoot function will receive the 'Goal' string when the button is clicked.

// e.g
import React from 'react';
import ReactDOM from 'react-dom/client';

function Football() {
    const shoot = (a) => {
        alert(a);
    }
    
    return (
        <button onClick={() => shoot('Goal')}>Take the shot!</button>
    );
    }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);
//Here a is the argument passed to the shoot function when the button is clicked.We can pass any argument to the function. even x,y,z etc.


