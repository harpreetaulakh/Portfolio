const navList = document.querySelector(".my-nav-list");
const menuToggle = document.querySelector(".nav-toggle");

// This function controls hamburger menu in mobile version of the website
menuToggle.addEventListener("click", () => {
    const visible = navList.getAttribute("data-visible");
    if (visible === "false"){
        navList.setAttribute("data-visible", true);
        menuToggle.setAttribute("aria-expanded", true);
    }
    else{
        navList.setAttribute("data-visible", false);
        menuToggle.setAttribute("aria-expanded", false);
    }
});