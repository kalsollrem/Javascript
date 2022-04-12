import React, {useState} from 'react';
import './App.css';
/*eslint-disable */ //warning를 잡아주기위한 코드

function App() 
{
  //state를 써야하는 이유 : 웹을 app처럼 사용하기 위해서필요. state는 데이터가 바뀔경우 데이터를 담고있는 html이 재렌더링된다.
  let [title, tChange] = useState(['책 추천 받아요','이책도 좋네요','이 책은 어때요?']); //stste는 array를 생성하는 방식으로, 변수대신 쓰는 데이터공간이다. 이경우 title에 '책추천받아요가 들어간다' 
  let [numb, numCh]  = useState(0);
  
  function chTitle()
  {
    var newArray = [...title];    /*deep copy가 필요. ['책 추천 받아요','이책도 좋네요','이 책은 어때요?']의 []를 제거하고 새로 담기위한 기법.
                                  먼저 사본을 만들 필요가 있다.*/
    newArray[0] = '코트 추천';
    tChange(newArray);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <div style={{color:'yellow' , fontSize : '40px'}}>개발 블로그</div>   {/*style의 경우 object자료형으로 만든 스타일 style={ {변경요소 : '값' } }을 사용해야하며, font-size같이 -가 들어가는 경우, -가 사용 불가능 하기때문에 -뒤의 첫글자를 대문자로 바꿔 사용한다.  */}
      </div>
      <div className='list'>
        <h3>{title[0]} ㅇㅂㅇ</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{title[1]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{title[2]}</h3>
        <p>2월 17일 발행</p>
        <button onClick={chTitle}>버튼 </button>
        <hr/>
      </div>
    </div>


  );
}

export default App;
