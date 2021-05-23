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
});


const sliders = document.querySelectorAll(".slide-in");



const appearOptions = {
    threshold: 0,
    rootMargin: "300px 0px -250px 300px"
}; 

const appearOnScroll=new IntersectionObserver(function(
    entries,
    appearOnScroll
){
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, 
appearOptions);

sliders.forEach(slider =>{
    appearOnScroll.observe(slider);
});