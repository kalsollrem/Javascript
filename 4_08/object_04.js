var phoneNum = "010-2345-1234";
var result1 = phoneNum.substring(0,9); //0에서 9번째 자리까지 자르기
document.write(result1,"****<br>")

var imgSrc = "images/bnt_out.jpg";
var result2 = imgSrc.replace("out", "over");  //out을 over로 변경
document.write(result2, "<br>");



var menu =  new Array("짜장면", "돈가스", "된장국", "김치찌개", "회덥밥");      //배열에 등록
var menuNum = Math.floor(Math.random() * menu.length);                       //배열의 길이만큼 난수 생성
var result3 = menu[menuNum]                                                  //난수값에 해당하는 변수를 menuNum에서가져온다
document.write(result3, "<br>");