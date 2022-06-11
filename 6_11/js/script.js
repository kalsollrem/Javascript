$(function(){

    $(".menu>li").hover(function()
    {
        $(this).find("ul.sub").stop().slideDown();
    },function(){
        $(this).find("ul.sub").stop().slideUp();
    });

    $(".ones").click(function(){
        $(".modal").show();
    });

    $(".alrim>button").click(function(){
        $(".modal").hide();
    });

    var t = 0;
    
    setInterval(function(){

        if(t<2) {t++;}
        else    {t=0;}
        
        $(".banner>ul").animate({left:(t*-800)},500)
    },3000);
});