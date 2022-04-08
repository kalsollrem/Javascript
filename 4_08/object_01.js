var tv = new Object();
tv.color = "white";
tv.price = 3000;
tv.info = function()
{
    document.write("색상" + this.color, "<br>");
    document.write("가격" + this.price, "<br>");
}

document.write("객체 불러오기", "<br>");
tv.info();