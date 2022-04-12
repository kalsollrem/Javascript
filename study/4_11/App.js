import logo from './logo.svg';
import './App.css';

//일반적인 자바스크립트 문법과 같음. 여기서 작성한 목록을 index.js에서 연결
//전통적인 document.getElementById()등을 통한 데이터 바인딩이 필요가 없어 변수지정이 매우 간단함.
//{ 변수명 }을 통해 간단하게 렌더링 가능.
//주석은 {/* */}의 형태로 사용가능
 
let dateBind = "데이터 바인딩 예시";
let stylepartA = {color:"yellow" , fontSize : '40px'};       //style을 셋팅한 함수.

function App() 
{
  function MunJa()
  {
    return '이것은 함수 문자입니다.'
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div style={stylepartA}>개발 블로그</div>   
      </div>
      <h4>{MunJa()}</h4>

    </div>
  );
}

export default App;
