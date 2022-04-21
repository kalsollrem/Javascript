window.onload=function()
{
    const h1 = document.querySelector("div.hello:first-child h1");
    function handleTitleClick()
    {
        
        //contains를 활용해 Class 이름 바꾸기
        /* 
        const clickedClass = "clicked";

        if(h1.classList.contains(clickedClass) )
        {
            h1.classList.remove(clickedClass) ="";
        }
        else
        {
            h1.classList.add(clickedClass);
        }
        */


        //toggle를 활용한 Class 이름 바꾸기
        //tiggle은 classList에서 clicked가 존재하는지 확인하고, 없으면 생성, 있음 제거해준다.
        h1.classList.toggle("clicked");             

    }
    h1.addEventListener("click",handleTitleClick);
}