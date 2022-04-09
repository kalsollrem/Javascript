function chColor()
{
    var arrColor = ["red", "black", "green", "white"]
    var arrNum = Math.ceil(Math.random() * arrColor.length);
    var bodyTag = document.getElementById("theBody");
    bodyTag.style.backgroundColor = arrColor[arrNum];
}
