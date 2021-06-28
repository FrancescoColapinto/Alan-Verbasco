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
        $("nav").slideToggle(500);
    });
    $(".eventlist li").click(function() {
        $(".eventbackground").slideToggle(500);

    });
    $(".exit").click(function() {
        $(".eventbackground").css("display", "none");

    });
    $(".comingsoon").click(function() {
        alert("Coming Soon");
    });
});

var img = 1;

function next() {
    img ++;
    if (img>13) {
        img = 1;
    }
    document.querySelector("#photoevent").src = "assets/img/slideevent/" + img + ".jpg";
}
function prev() {
    img --;
    if (img<1) {
        img = 13;
    }
    document.querySelector("#photoevent").src = "assets/img/slideevent/" + img + ".jpg";
}