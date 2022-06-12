$(function()
{
    var t =0

    setInterval(function(){
        if(t<2) {t++;}
        else    {t=0;}

        $(".images").animate({left:(t*-1200)},500)
    },3000)

    $(".gon").click(function()
        {
            $(".gon").hide();
            $(".pic").show();
        }
    )
    
    $(".pic").click(function()
        {
            $(".pic").hide();
            $(".gon").show();
        }
    )
});