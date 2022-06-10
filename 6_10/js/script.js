$(function()
{
    //내비가이드
    $("ul.gnb>li").hover(function()
    {
        $(this).find("ul.sub").stop().slideDown();
    },
    function()
    {
        $(this).find("ul.sub").stop().slideUp();
    })                                              

    //슬라이드
    var slideIndex=0;
    setInterval(function()
    {
        if(slideIndex<2) 
        {
            slideIndex++
        }
        else
        {
            slideIndex = 0;
        }
        $(".main_visual ul").animate({left:(slideIndex*-800)},500)
    },3000);


    //모달
    $(".notice ul li").click(function()
    {
        $(".modal").fadeIn();
    });

    $(".modal_inner button").click(function()
    {
        $(".modal").hide();
    });


});

