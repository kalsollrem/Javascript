const clock = document.querySelector("h2#clock");

clock.innerText = "hello"

function getClock(){
    const date      = new Date();
    const hours     = String(date.getHours()).padStart(2,"0");
    const minutes   = String(date.getMinutes()).padStart(2,"0");
    const second    = String(date.getSeconds()).padStart(2,"0");    //padStart로 자릿수가 하나일때 앞에 0을 추가.
    clock.innerText = `${hours}:${minutes}:${second}`;

}

getClock();
setInterval(getClock, 1000);                                        //인터벌로 1초에 한번씩 함수실행.