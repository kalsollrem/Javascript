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
            props.onChangeMode(Number(event.target.id));
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
  
  
  
  //mode의 값에 따라 실시간으로 state값에 따라 업데이트 하기 위한 코드.
  const [mode, setMode] = useState("WELCOME");
  const [id, setId]     = useState(null);

  const topiecs = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'javascript', body:'javascript is...'}
  ];
  
  let content = null;           //const는 불변, let는 변함가능. 이거 주의.
  if(mode === "WELCOME")
  {
    content = <Article title="WELCOME" body="hello,React"></Article>;
  }
  else if(mode === "READ")
  {
    let title, body = null;

    //순회하면서 topiecs의 id값이 id값과 일치할때 topiecs내부에 설정된 값을 let title와 body값에 적용.
    for(let i = 0; i<topiecs.length; i++)
    {
      if(topiecs[i].id === id)
      {
        title = topiecs[i].title;
        body  = topiecs[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
  }

  return (
    <div>
      <Header title="REW" onChangeMode={()=>{setMode("WELCOME");}}/>
      <Nav topiecs={topiecs} onChangeMode={(_id)=>{setMode("READ"); setId(_id);}}/>
      {content}
    </div>

  );
}


export default App;
