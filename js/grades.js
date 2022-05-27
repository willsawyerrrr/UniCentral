addLoadEvent(setPath);

/*
 * Sets the path to display the appropriate study period and course code.
 * The path is of the following form:
 *      *home icon*  >  Semester *sem*, *year*  >  *course code* Grades
 * Where sem, year and course code are the semester, year and code attributes of
 * the course object.
 */
function setPath() {
    let course = Course.getCourseFromURL();

    document.title += ` ${course.code} Grades`;

    let semester = document.getElementById("semester");
    semester.innerText = `Semester ${course.semester}, ${course.year}`;

    let courseElem = document.getElementById("course");
    courseElem.innerText = `${course.code} Grades`;
}