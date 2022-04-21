window.onload = function()
{
    const loginInput    = document.querySelector("#login-form input");
    const loginButton   = document.querySelector("#login-form button");
    const loginForm     = document.querySelector("#login-form");

    function onLoginSubmit(event)
    {
        event.preventDefault();
        alert(loginInput.value);
        console.log(loginInput.value);


        //폼체크
        /* 
            if(userName === "")
            {
                alert("이름을 입력해주세요");
            }
            else if(userName.length >= 15)
            {
                alert("이름이 너무 길어요.")
            }
        */
    }

    loginForm.addEventListener("submit", onLoginSubmit);
}