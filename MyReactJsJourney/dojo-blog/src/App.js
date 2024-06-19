import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { createContext,useContext } from 'react';

const ThemeContext=createContext(null);

function App() {
    return (
        <div className="App">
        <Navbar/>
            <div className="content">
            <Home />
               
            </div>
        </div>
    );
}

export default App;
