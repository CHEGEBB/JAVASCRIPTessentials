//In react to render lists we use the map() method. The map() method is used to iterate over an array and render each item in the array.
//In the below example we are rendering the list of items using the map() method.
import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

/*
If you run this example in your create-react-app,
you will receive a warning that there is no "key" provided for the list items.
*/
//Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.

//Keys need to be unique to each sibling. But they can be duplicated globally.
//In the below example, we are adding a key to the Car component.
//The key is a unique identifier for each car.
import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
    return <li>I am a { props.brand }</li>;
    }
    function Garage() {
        const cars = [
          {id: 1, brand: 'Ford'},
          {id: 2, brand: 'BMW'},
          {id: 3, brand: 'Audi'}
        ];
        return (
          <>
              <h1>Who lives in my garage?</h1>
              <ul>
              {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
            </ul>
          </>
        );
      }