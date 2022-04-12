window.onload =function()
{
    let btn1 = document.querySelector("#btn1");
    let btn2 = document.querySelector("#btn2");
    let box = document.getElementById("title_box");

    btn1.addEventListener('click', change_bgA);       //적색 백그라운드로 변경
    btn2.addEventListener('click', change_bgB);       //초록색 백그라운드로 변경

    function change_bgA()
    {
        box.style.backgroundColor = "red";
        alert(빨강);
    }

    function change_bgB()
    {
        box.style.backgroundColor = "green";
        alert(초록);
    }

}