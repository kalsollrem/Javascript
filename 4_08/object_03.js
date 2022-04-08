document.write("<h1>가위 바위 보</h1> <br>");

var hand = prompt("가위 바위 보!");
var yourHand = Math.ceil(Math.random()*3);
var whoWin;

//내가 낸 값
switch(hand)
{
    case "가위": yourHand = "가위"; break;
    case "바위": yourHand = "바위"; break;
    case "보"  : yourHand = "보"; break;
    default    : alert("잘못 작성하셨습니다"); location.reload();  break;
}

//상대가 낸 값
switch(yourHand)
{
    case 0: yourHand = "가위"; break;
    case 1: yourHand = "바위"; break;
    default: yourHand = "보";  break;
}

//승리판독
if(hand === "가위" && yourHand === "보" || hand ==="바위" && yourHand ==="가위" || hand === "보" && yourHand === "바위")
{
    whoWin = "승리!";
}
else if (hand === "가위" && yourHand === "가위" || hand ==="바위" && yourHand ==="바위" || hand === "보" && yourHand === "보")
{
    whoWin = "무승부";
}
else
{
    whoWin = "패배"
}

document.write("상대는 " + yourHand +"를 내었습니다 <br>");
document.write(whoWin);