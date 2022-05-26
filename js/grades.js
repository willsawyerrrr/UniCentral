addLoadEvent(setPath);

function setPath() {
    let course = Course.getCourseFromURL();

    document.title += ` ${course.code} Grades`;

    let semester = document.getElementById("semester");
    semester.innerText = `Semester ${course.semester}, ${course.year}`;

    let courseElem = document.getElementById("course");
    courseElem.innerText = `${course.code} Grades`;
}