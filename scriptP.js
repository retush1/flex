$(window).on("load", function () {
    var sum=0;
    $(".ritual-container li img").each(function(){ 
        sum += $(this).width();
    });
    $(".ritual-container ul").width(sum);
});
$(function(){
    var winWidth = $(".ritual-container").width();
    var ulWidthCount = 0;
    ulWidthCount = $(".ritual-container li").length;
    $(".ritual-container li").width(winWidth/ulWidthCount);
    $(".ritual-container li").hover(function(){            
        ulWidthCount = $(".ritual-container li").length;
        var imgWidth = $(this).find("img").width();
        var bannerLi = winWidth - imgWidth;
        var remWidth = ulWidthCount - 1;
        var appWidth = bannerLi/remWidth;
        $(".ritual-container li").stop(true, false).animate({width: appWidth},700);
        $(this).stop(true, false).animate({width: imgWidth},700);
        $(this).find("span.overlay").stop(true, false).fadeOut();
        }, function(){
        $(this).animate({width: winWidth/ulWidthCount},700);
        $(".ritual-container li").animate({width:winWidth/ulWidthCount},700);
        $(this).find("span.overlay").fadeIn();
    });    
});    