var path = document.getElementById("path");
let dirs = window.location.pathname.split("/");

for (directory of dirs) {
    let caret = document.createElement("p");
    caret.innerText = "&rsaquo;";
    path.appendChild(caret);

    let child = document.createElement("a");
    child.innerText = directory;
    path.appendChild(child);
}