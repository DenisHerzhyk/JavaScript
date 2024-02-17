function displayMenus() {
    let menu = document.getElementById("menus");
    let icon = document.querySelector(".plus-minus-switcher");

    if (menu.style.display === "none") {
        icon.src = 'photos/R.png';
        menu.style.display = "block";
        menu.classList.add('fade-in');
        menu.style.opacity = "1";
    }
    else {
        icon.src = 'photos/OIP.jpeg';
        menu.style.display = "none";
        menu.classList.remove('fade-in');
        menu.style.opacity = "0";
    }
}