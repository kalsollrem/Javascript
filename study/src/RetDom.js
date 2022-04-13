import React, {useState} from 'react';
import './App.css';


function RetDom()
{
  const [cont, modi] = React.useState(0);
 
  const onCl = () =>
  {
    modi(cont + 1 );
  }

  return(
    <div className='RetDom'>
      <div>{cont}</div>
      <button onClick={onCl}>클릭</button>
    </div>
  )
}

export default RetDom;        //내보내는 이름
