var myName = "김정현";
var myAge = 29;

class Person 
{
  //생성자 함수를 `constructor`로 정의
  constructor({name, age}) 
  {
    this.name = name;
    this.age = age;
  }

  // 메소드를 저장. 프로토타입에 저장된다.
  introduce() 
  {
    return `안녕하세요, 제 이름은 ${this.name}입니다.`;
  }
}
var person = new Person({name: myName, age: myAge});       //클래스 생성자에 값을 넣는다.
document.write(person.introduce());                        //메소드 실행. '안녕하세요 제 이름은 김정현 입니다' 출력.
