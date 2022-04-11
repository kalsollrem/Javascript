import logo from './logo.svg';
import './App.css';

//일반적인 자바스크립트 문법과 같음. 여기서 작성한 목록을 index.js에서 연결
//전통적인 document.getElementById()등을 통한 데이터 바인딩이 필요가 없어 변수지정이 매우 간단함.
//{ 변수명 }을 통해 간단하게 렌더링 가능.
//주석은 {/* */}의 형태로 사용가능

let dateBind = "데이터 바인딩 예시";
let stylepartA = {color:"green" , fontSize : '20px'};       //style을 셋팅한 함수.

function App() 
{
  function MunJa()
  {
    return '이것은 함수 문자입니다.'
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div style={{color:'yellow' , fontSize : '40px'}}>개발 블로그</div>   {/*style의 경우 object자료형으로 만든 스타일 style={ {변경요소 : '값' } }을 사용해야하며, font-size같이 -가 들어가는 경우, -가 사용 불가능 하기때문에 -뒤의 첫글자를 대문자로 바꿔 사용한다.  */}
      </div>
      <img src={ logo }></img>                                                {/*import한 파일의 이름을 지정해 가져온다*/}
      <h4>{MunJa()}</h4>                                                      {/* 함수 사용법 */}
      <h4 style={stylepartA}>{dateBind}</h4>                                  {/* 함수 주입 */}
    </div>
  );
}

export default App;
