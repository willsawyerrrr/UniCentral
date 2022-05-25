let headerMedia = window.matchMedia("(max-width: 1000px)");
headerMedia.addListener(setMenu);

/* Shows or hides the navbar menu according to the screen width. */
function setMenu(media) {
    if (media.matches) {
        hideMenu();
    } else {
        hideDropdown();
        showMenu();
    }
}

/* Shows the navbar menu. */
function showMenu() {
    let menuItems = document.getElementsByClassName("menu");
    
    for (element of menuItems) {
        element.style.display = "block";
    }
}

/* Hides the navbar menu. */
function hideMenu() {
    let menuItems = document.getElementsByClassName("menu");
    
    for (element of menuItems) {
        element.style.display = "none";
    }
}

/* Toggles the visibility of the dropdown menu. */
function toggleDropdown() {
    if (document.getElementById("dropdown").style.display == "none") {
        showDropdown();
    } else {
        hideDropdown();
    }
}

/* Shows the dropdown menu. */
function showDropdown() {
    document.getElementById("dropdown").style.display = "flex";
}

/* Hides the dropdown menu. */
function hideDropdown() {
    document.getElementById("dropdown").style.display = "none";
}
