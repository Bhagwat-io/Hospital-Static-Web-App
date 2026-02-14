document.addEventListener("DOMContentLoaded", function () {

    // Sticky header effect
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        header.classList.toggle("sticky", window.scrollY > 50);
    });

    // Hero button click
    const button = document.querySelector(".hero button");
    button.addEventListener("click", function () {
        alert("Appointment booking feature coming soon!");
    });

    // Navigation placeholder
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Section coming soon!");
        });
    });

});

