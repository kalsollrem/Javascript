import React, {useState} from 'react';
import './App.css';


function App() 
{
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));

  return (
    element

  );
}


export default App;
