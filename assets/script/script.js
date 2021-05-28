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
        $("nav").css("display", "block")
    });
});
/*slider dei paragrafi*/
const sliders = document.querySelectorAll(".slide-in"); /*seleziono tutti i miei paragrafi con classe slide-in*/

const appearOptions = { /*creo una costante con i parametri di threshold e root margin da inserire in IntersectionObserver*/
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
    /*il root margin è impostato per dirmi che appena supero i 250px di visibilità dell'elemento parte la funzione di callback*/
}; 

const appearOnScroll=new IntersectionObserver(function( /*costante principale del mio obiettivo*/
    entries, /*callback f*/
    appearOnScroll
){
    entries.forEach(entry => {
        if (!entry.isIntersecting) { /*se l'elemento desiderato non "compare"*/
            return;/*non fare niente*/
        } else { 
            entry.target.classList.add("appear"); /*inserisci la classe appear*/
            appearOnScroll.unobserve(entry.target);
        }
    })
}, 
appearOptions);

sliders.forEach(slider =>{
    appearOnScroll.observe(slider); /*attivo appearOnscroll su sliders, ovvero i miei .slide-in*/
});