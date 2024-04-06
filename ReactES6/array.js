// The .map() method allows you to run a function on each item in the array, returning a new array as the result.
// In React, map() can be used to generate lists.
// example
import React from 'react'
import { ReactDOM } from 'react'

const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(myList);