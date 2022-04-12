import './App.css';
import React, {useState} from 'react';

function App() 
{
  const counter = 0;

  let [count , modifier] = React.useState(0);
  const count = () => {
    counter = counter +1;
  }

  return (
    <div className="App">
      <RetDom></RetDom>
    </div>
  );
}

function RetDom()
{
  return(
    <div className='RetDom'>
      <div>아아</div>
      <button onClick={count}>클릭</button>
    </div>
  )
}


export default App;
