var today = new Date();
var nowMonth = today.getMonth() + 1; //달. getMonth()는 값이-1이기에 +1이필요
var nowDate  = today.getDate();      //일
var nowDay   = today.getDay();       //요일. getDay()는 값은 0~6으로 표기

switch(nowDay)
{
    case 1: nowDay  = "월요일"; break;
    case 2: nowDay  = "화요일"; break;
    case 3: nowDay  = "수요일"; break;
    case 4: nowDay  = "목요일"; break;
    case 5: nowDay  = "금요일"; break;
    case 6: nowDay  = "토요일"; break;
    default: nowDay = "일요일"; break;
}

document.write("이번 달은" + nowMonth + "월 이고, <br> 일은" + nowDate +"일 이며,<br> 요일은 " + nowDay + "이다 <br>");

