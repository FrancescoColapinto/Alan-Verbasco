$(document).ready(function () {
    $(".shortcut").animate({
        width: "toggle"
    }, 1000);
    $(".logoname").fadeIn(2000);
    $(".geo").mouseenter(function(){
        $(".image").animate({
            padding: "0"
        },500)
    })
    $(".geo").mouseleave(function(){
        $(".image").animate({
            padding: "20px"
        },500)
    })
    $(".geo2").mouseenter(function(){
        $(".image2").animate({
            padding: "0"
        },500)
    })
    $(".geo2").mouseleave(function(){
        $(".image2").animate({
            padding: "20px"
        },500)
    })
    $(".geo").mouseenter(function(){
        $(".image3").animate({
            padding: "0"
        },500)
    })
    $(".geo").mouseleave(function(){
        $(".image3").animate({
            padding: "20px"
        },500)
    })
    $(".geo2").mouseenter(function(){
        $(".image4").animate({
            padding: "0"
        },500)
    })
    $(".geo2").mouseleave(function(){
        $(".image4").animate({
            padding: "20px"
        },500)
    })
    $(".navbtn").click(function(){
        $(".shortcut li").css("display", "inline")
        $("nav").toggle(500)
    });
});