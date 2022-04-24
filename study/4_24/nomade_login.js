window.onload = function()
{
    const loginInput    = document.querySelector("#login-form input");
    const loginForm     = document.querySelector("#login-form");
    const link          = document.querySelector("a");
    const greeting      = document.querySelector("#greeting");

    const HIDDEN_CLASSNAME = "hidden"                               //string만 포함된 변수는 대문자로 표기, string을 저장하고싶을때 사용

    function onLoginSubmit(event)
    {
        event.preventDefault();
        loginForm.classList.add(HIDDEN_CLASSNAME);

        const username = loginInput.value;
        greeting.innerText = `hello ${username}` ;                  // [ ` ]백틱을 활용하면 +를 쓰지않고도 깔끔한 문자열을 작성가능.
        greeting.classList.remove(HIDDEN_CLASSNAME);
        
    }

    function handleLink(event)
    {
        event.preventDefault();
        console.dir(event);             //console.dir을 이용하면 보다 상세한 정보를 얻을 수 있다.
        alert("클릭!");
    }
    loginForm.addEventListener("submit", onLoginSubmit);
    link.addEventListener("click", handleLink);

    
}