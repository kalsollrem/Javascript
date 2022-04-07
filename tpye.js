var s = "100";
var t = Number(s);

if(s === 100)
{
    document.write("정수" + "<br>");
}

else
{
    document.write("글자" + "<br>")
}

var a = true;
var b = false;
var c = 10>5;
var d = Boolean(null);

document.write(a, "<br>");
document.write(b, "<br>");
document.write(c, "<br>");
document.write(d, "<br>");

document.write(typeof s, "<br>");
document.write(typeof t, "<br>");


var price1 = 3000;
var price2 = 2000;
var price3 = 3000;

var result = price1 + price2 + price3;
var ancer = result > 10000 ? result - 10000 + "원 초과" : "돈 관리 잘하셨어요";
document.write(ancer, "<br>");


var d1 = 1200;
var d2 = 1300;
var d3 = 1000;

var all = (d1+d2+d3)/3;
var d4 = prompt("올해의 매출은","")
var cNum = Number(d4);

var dap = all <= cNum ? "평균 이상입니다" : "평균미달입니다"
document.write(dap);

window.location.href="https://www.naver.com";