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

function Create(props)
{
  return(
    <article>
      <h2>Create</h2>
      <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;         //입력한 title값을 가져온다.
        const body  = event.target.body.value;          //입력한 body값을 가져온다.
        props.onCreate(title, body);
        }}>
        <p><input type="text" name='title' placeholder='title'/></p>
        <p><textarea name="body" placeholder='body'></textarea></p>
        <p><input type="submit" value="Create"></input></p>
      </form>
    </article>
    )
}

function Update(props)
{
  //props로 받은 값은 불면하기때문에 state로 변환한다.
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  return(
    <article>
      <h2>Update</h2>
      <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;         //입력한 title값을 가져온다.
        const body  = event.target.body.value;          //입력한 body값을 가져온다.
        props.onUpdate(title, body);
      }}>
        <p><input type="text" name='title' placeholder='title' value={title} onChange={event=>{
          setTitle(event.target.value);                 //onChange로 변화가일어날때마다 값을 업데이트한다.
        }}/></p>
        <p><textarea name="body" placeholder='body' value={body} onChange={event=>{
          setBody(event.target.value);
        }}></textarea></p>
        <p><input type="submit" value="Update"></input></p>
      </form>
    </article>
    )
}

function App() 
{
  //mode의 값에 따라 실시간으로 state값에 따라 업데이트 하기 위한 코드.
  const [mode, setMode] = useState("WELCOME");
  const [id, setId]     = useState(null);
  const [nextId, setNextId] = useState(4);

  const [topiecs, setTopiecs] = useState([
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'javascript', body:'javascript is...'}
  ]);
  
  let content = null;           //const는 불변, let는 변함가능. 이거 주의.
  let contextControl = null;
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
    contextControl = <li><a href={'/update/'+id} onClick={event=>{
      event.preventDefault();
      setMode('UPDATE');
    }}>Update</a></li>;
  }
  else if(mode === "CREATE")
  {
    content = <Create onCreate={(_title, _body)=>{
      const newTopiec = {id:nextId, title:_title, body:_body};
      const newTopiecs = [...topiecs];                        //범객체(오브젝트,배열타입)는 값을 복제해서 넣어야할 필요가 있음.
      newTopiecs.push(newTopiec);
      setTopiecs(newTopiecs);
      setMode("READ");                                         //읽기 모드로 변경
      setId(nextId); 
      setNextId(nextId+1);
    }}></Create>;
  }
  else if(mode === "UPDATE")
  {
    //기존 값을 찾는 코드
    let title, body = null;
    for(let i = 0; i<topiecs.length; i++)
    {
      if(topiecs[i].id === id)
      {
        title = topiecs[i].title;
        body  = topiecs[i].body;
      }
    }

    content = <Update title={title} body={body} onUpdate={(title,body)=>{
      const newTopics = [...topiecs]
      const updatedTopic = {id:id, title:title, body:body}
      for(let i=0; i<newTopics.length; i++)
      {
        if(newTopics[i].id === id)
        {
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopiecs(newTopics);
      setMode('READ');                                //업데이트 후 READ모드로 변경.
    }}></Update>
  }

  return (
    <div>
      <Header title="REW" onChangeMode={()=>{setMode("WELCOME");}}/>
      <Nav topiecs={topiecs} onChangeMode={(_id)=>{setMode("READ"); setId(_id);}}/>
      {content}
      <ul>
        <li>
          <a href='/creat' onClick={event=>{
            event.preventDefault();
            setMode('CREATE');
          }}>Creat</a>
        </li>
        {contextControl}
      </ul>
    </div>

  );
}


export default App;
