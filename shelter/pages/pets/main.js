// const mobileMenu = document.querySelector("#mobile-menu");
// mobileMenu.addEventListener("click", function() {
//     mobileMenu.classList.toggle("active");
//     document.querySelector("#header").classList.toggle("mobile-bar");
//     // document.body.classList.toggle(".overflow");
// })

let mobileBar; 
const mobileMenu = document.querySelector("#mobile-menu");

function toggleMenu() {
    mobileMenu.classList.toggle("active");
    document.querySelector("#header").classList.toggle("mobile-bar");
    document.body.classList.toggle("overflow");
    document.querySelector("#wrapper").classList.toggle("inactive-bg");
    document.querySelector("#fade-wrapper").classList.toggle("fade-wrapper");
}

mobileMenu.addEventListener("click", function(e) {
    toggleMenu();
    mobileBar = document.querySelector(".mobile-bar");
    e.stopPropagation();
})

document.addEventListener("click", function(event) {
    if (mobileBar && (!event.path.includes(mobileBar) || event.target.classList.contains("header-nav-link"))) {
        toggleMenu();
        mobileBar = null;
    }
})