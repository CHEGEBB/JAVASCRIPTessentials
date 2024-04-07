//The useEffect Hook allows you to perform side effects in your components.
//examples of side effects include data fetching, setting up a subscription, and manually changing the DOM in React components,timers
//useEffect accepts two arguments. The second argument is optional.
//useEffect(<function>, <dependency>)
//example
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I have rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);