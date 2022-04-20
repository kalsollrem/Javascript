window.onload = function()
{
    const title = document.querySelector(".hello h1");
    
    function handUp()
    {
        const currentColor = title.style.color;
        let newColor ;
        if(currentColor === "blue")
        {
            newColor = "tomato";
        }
        else
        {
            newColor = "blue";
        }
        title.style.color = newColor;
        //currentColor = newColor은 먹히지않음.
    }

    title.addEventListener("mouseover", handUp);
}