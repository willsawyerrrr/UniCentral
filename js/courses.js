addLoadEvent(makePath);
addLoadEvent(addCourses);

let params = new URLSearchParams(window.location.search);
let intention = params.get("intention");

function makePath() {
    let path = document.getElementById("intention");
    path.innerText = intention[0].toUpperCase() + intention.slice(1);
}

function addCourses() {
    let content = document.getElementById("content");
    
    for (let course of Course.courses) {
        let div = document.createElement("div");
        div.classList.add("course");
        div.id = course.code.toLowerCase();
        content.appendChild(div);

        let link = document.createElement("a");
        link.href = `${intention}.html?course=${course.code}`;
        div.appendChild(link);

        let code = document.createElement("p");
        code.classList.add("code");
        code.innerText = course.code;
        link.appendChild(code);

        let name = document.createElement("p");
        name.innerText = course.name;
        link.appendChild(name);
    }
}
