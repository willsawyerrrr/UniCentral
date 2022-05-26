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
        showCourse(course);
    }
}
