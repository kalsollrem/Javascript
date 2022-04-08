var idname = "me"
var pass = "1234"
var id = prompt("아이디를 입력하세요");
var pw = prompt("비밀번호를 입력하세요");

function login(id, pw)
{
    if(id === idname && pw === pass)
    {
        alert("환영합니다");
    }
    else
    {
        alert("아이디, 혹은 비밀번호가 잘못되었습니다.")
        location.reload();
    }
}

login(id, pw);

var index = new Array("black", "white", "red");
var count = 0;

function countUp()
{
    count ++ ;
    if(count > index.length)
    {
        count = 0;
    }
    var bodyTag = document.getElementById("theBody");
    bodyTag.style.backgroundColor = index[count];

}