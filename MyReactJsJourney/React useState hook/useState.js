//Im React we have various hooks to manage the state of the component. One of the most used hooks is the useState hook.
//The useState hook is used to manage the state of the component. It is a named export from the react package.
//The useState hook takes an initial state as an argument and returns an array of two elements.
//The first element is the current state value and the second element is a function that allows you to update the state.
//In the below example we are using the useState hook to manage the state of the component.
//The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!
import { useState } from "react";
import ReactDOM from "react-dom/client";


function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");
  
  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
//the above can be simplified using a single object to store the state
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });
  
  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);