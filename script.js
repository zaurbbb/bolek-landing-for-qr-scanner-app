const nav = document.querySelector("nav");
const links = nav.querySelectorAll(".header_links");

nav.addEventListener("click", (event) => {
    const targetLink = event.target.closest(".header_links");
    if (!targetLink) {
        return;
    }
    links.forEach((link) => link.classList.remove("active"));
    targetLink.classList.add("active");
});

$(".header_links").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});

var v = document.getElementById('aboutAppBlock');
var h = document.getElementById('header').classList;

window.addEventListener('scroll', ()=>{
    if (window.scrollY > v.offsetHeight){
        h.add('bgDark');
    } else {
        h.remove('bgDark');
    }
});