window.onload = function()
{
    //셀렉터
    const loginInput    = document.querySelector("#login-form input");
    const loginForm     = document.querySelector("#login-form");
    const link          = document.querySelector("a");
    const greeting      = document.querySelector("#greeting");


    //String 변수
    const HIDDEN_CLASSNAME = "hidden";                              //string만 포함된 변수는 대문자로 표기, string을 저장하고싶을때 사용
    const USERNAME_KEY     = "username";


    //로그인
    function onLoginSubmit(event)
    {
        event.preventDefault();
        loginForm.classList.add(HIDDEN_CLASSNAME);
        const username = loginInput.value;

        localStorage.setItem("USERNAME_KEY", username);                 //username을 세션에 저장
        paintGreeting(username);
    }

    //스토리지에 저장된 key값 챙기기
    const saveUsername = localStorage.getItem("USERNAME_KEY");

    
    //중복코드를 함수로 축소
    function paintGreeting(username)
    {
        greeting.innerText = `hello ${username}` ;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }


    //로컬 스토리지에 key값이 저장되어있나 판별.
    if(saveUsername === null)
    {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    }
    else
    {
        paintGreeting(saveUsername);
    }

}