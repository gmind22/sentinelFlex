const mobileNav = document.querySelector(".mobile-nav"); // Add dot before class name
const menuIcon = document.querySelector(".menu-icon"); // Add dot before class name
const closeIcon = document.querySelector(".mmc .close");
const mobileMenuContainer = document.querySelector(".mmc");

menuIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("active");
});