import React, { useState } from 'react';

function App() {
  // Define state variable for the counter
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const incrementCounter = () => {
    // Update the count state by incrementing its current value
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Button Click Counter</h1>
      <p>Count: {count}</p>
      {/* Button to increment the counter */}
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default App;
