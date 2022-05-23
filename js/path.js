addLoadEvent(setPath);

function setPath() {
    var path = document.getElementById("path");
    let dirs = window.location.pathname.split("/");

    if (dirs.length == 1) return;

    for (subdir of dirs) {
        if (!subdir) {
            let child = document.createElement("a");
            child.setAttribute("href", "index.html");
            path.appendChild(child);
            
            let image = document.createElement("img");
            image.setAttribute("src", "images/home.jpg");
            image.setAttribute("alt", "Home icon");
            child.appendChild(image);
            
            continue;
        }

        let caret = document.createElement("p");
        caret.innerHTML = "&rsaquo;";
        path.appendChild(caret);

        let child = document.createElement("a");
        child.innerText = cleanSubdir(subdir);
        path.appendChild(child);
    }
}

function cleanSubdir(subdir) {
    return subdir;
}
