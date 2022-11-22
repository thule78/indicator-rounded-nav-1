const controlBtn = document.querySelector(".control-btn");
const navList = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-item");
const indicator = document.querySelector(".indicator");

controlBtn.addEventListener("click", ()=> {
    navList.classList.toggle("open");
    controlBtn.classList.toggle("expend");
});

navItems.forEach((navItem, index) => {
navItem.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        navItem.classList.toggle("active");
        indicator.style.transform = `translatex(-10.3rem) rotate(${index * 45}deg)`;
    })
});