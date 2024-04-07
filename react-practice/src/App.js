import React from 'react';

const title = 'React';

function App() {
    return (
      <div>
          <h1> Hello {title} </h1>
          <label htmlFor="search">Search: </label>
          <input id="search" type="text" />
          <button style={{backgroundColor:'aqua',borderRadius:'10px',width:'100px',height:'40px',border:'0',margin:'20px auto'}}>Search</button>
      </div>

    );
}

export default App;
