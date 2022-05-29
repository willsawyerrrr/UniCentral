addLoadEvent(function() {
    makePath("Resources");
});
addLoadEvent(setIcons);

/* Expands to show the relevant list of links/materials. */
function expand(caller) {
    caller.onclick = function() {collapse(this)};
    let container = caller.parentElement.getElementsByTagName("ul")[0];
    container.style.display = "flex";

    let icon = caller.getElementsByClassName("icon")[0];
    icon.innerHTML = "&minus;";
}

function collapse(caller) {
    caller.onclick = function() {expand(this)};
    let container = caller.parentElement.getElementsByTagName("ul")[0];
    container.style.display = "none";

    let icon = caller.getElementsByClassName("icon")[0];
    icon.innerHTML = "&plus;";
}

function setIcons() {
    let files = document.getElementsByClassName("file");
    for (let file of files) {
        file.src = "images/paperclip.png";
    }

    let links = document.getElementsByClassName("link");
    for (let link of links) {
        link.src = "images/link.svg";
    }
}
