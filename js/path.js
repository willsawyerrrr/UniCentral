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
    let words = subdir.split("-");
    words = words.map(word => {
        return word.charAt(0).toUpperCase() + word.substring(1);
    });

    for (let i = 0; i < words.length; i++) {
        let index = words[i].indexOf(".html");
        if (index > -1) {
            words[i] = words[i].substring(0, index);
        }
    }

    return words.join(" ");
}
