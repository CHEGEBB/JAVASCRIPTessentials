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

