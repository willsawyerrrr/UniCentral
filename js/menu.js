let headerMedia = window.matchMedia("(max-width: 1000px)");
headerMedia.addListener(setMenu);

function setMenu(media) {
    if (media.matches) {
        hideMenu();
    } else {
        hideDropdown();
        showMenu();
    }
}

function showMenu() {
    let menuItems = document.getElementsByClassName("menu");
    
    for (element of menuItems) {
        element.style.display = "block";
    }
}

function hideMenu() {
    let menuItems = document.getElementsByClassName("menu");
    
    for (element of menuItems) {
        element.style.display = "none";
    }
}

function showDropdown() {
    document.getElementById("dropdown").style.display = "flex";
}

function hideDropdown() {
    document.getElementById("dropdown").style.display = "none";
}

function toggleDropdown() {
    if (document.getElementById("dropdown").style.display == "none") {
        showDropdown();
    } else {
        hideDropdown();
    }
}
