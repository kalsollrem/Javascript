import React, {useState} from 'react';
import './App.css';


function Header(props)
{
  console.log('props', props, props.title);  //하단의 컴포넌트에서 입력한 값을 받아서 입력
  
  return(
    <header>
      <h1><a href='/'>{props.title}</a></h1>  
    </header>
  )
}

function Nav(props)
{
  const list = [];

  for(let i = 0; i<props.topiecs.length; i++)
  {
    let t = props.topiecs[i];
    list.push(
      <li key={t.id}>
        <a href={'/read/' + t.id}>
          {t.title}
        </a>
      </li>
      );
  }

  return(
    <nav>
    <ol>
      {list}
    </ol>
  </nav>
  )
}

function Article(props)
{
  return(
    <article>
      <h2> {props.title} </h2>
      <p>{props.body}</p>
    </article>
  )
}


function App() 
{
  const topiecs = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'javascript', body:'javascript is...'}
  ];

  return (
    <div>
      <Header title="RE"/>
      <Nav topiecs={topiecs}/>
      <Article title="hi" body="hello,React"/>
      <Article title="hello" body="bye"/>
    </div>

  );
}


export default App;
