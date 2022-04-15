import React, {useState} from 'react';
import './App.css';


function Article(props)
{
  return(
    <article>
      <h2> {props.title} </h2>
      <p>{props.body}</p>
    </article>
  )
}


function Header(props)
{
  console.log('props', props, props.title);  //하단의 컴포넌트에서 입력한 값을 받아서 입력
  
  return(
    <header>
      <h1><a href='/' onClick={event=>{
        event.preventDefault();
        props.onChangeMode();
        alert(hi);
      }
      }>{props.title}</a></h1>  
    </header>
  )
}

function Nav(props)
{
  const list = [];

  //이벤트 설정. onchangeMode를 활용.
  //event.target을 활용하면 해당하는 이벤트의 값을 가져오는 것이 가능하다.
  
  for(let i = 0; i<props.topiecs.length; i++)
  {
    let t = props.topiecs[i];
    list.push(
      <li key={t.id}>
        <a id={t.id} href={'/read/' + t.id} onClick={event=>{
            event.preventDefault();
            props.onChangeMode(event.target.id);
          }}>
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

function App() 
{
  const topiecs = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'javascript', body:'javascript is...'}
  ];

  return (
    <div>
      <Header title="REW" onChangeMode={()=>{alert('header');}}/>
      <Nav topiecs={topiecs} onChangeMode={(id)=>{alert(id);}}/>
      <Article title="hi" body="hello,React"/>
      <Article title="hello" body="bye"/>
    </div>

  );
}


export default App;
