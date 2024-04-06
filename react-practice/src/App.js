import React, { useState } from 'react';

function App() {
  const [showColor, setShowColor] = useState(false); // State to manage visibility

  const myBeginning = <h1>Hello world its me React</h1>;
  const inputMe = <input type="email" placeholder="johnDoe@hotmail.com" />;
  const colorInput = (
    <p style={{ color: "blue" }}>
      Hey You clicked the button here's Your surprise paragraph!!
    </p>
  );

  return (
    <div className="App">
      {myBeginning}
      {inputMe}
      <button onClick={() => setShowColor(!showColor)}>Click Me!</button>
      {showColor && colorInput} {/* Render colorInput only if showColor is true */}
    </div>
  );
}

export default App;
