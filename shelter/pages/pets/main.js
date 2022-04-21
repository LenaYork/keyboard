const mobileMenu = document.querySelector("#mobile-menu");
mobileMenu.addEventListener("click", function() {
    mobileMenu.classList.toggle("active");
    document.querySelector("#header").classList.toggle("mobile-bar");
    // document.body.classList.toggle(".overflow");
})