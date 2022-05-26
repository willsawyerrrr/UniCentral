addLoadEvent(makePath);

/* Course whose assessment grades are to be shown on this page. */
let course = Course.getCourseFromURL();

/*
 * Sets the path to display the appropriate study period and course code.
 * The path is of the following form:
 *      *home icon*  >  Semester *sem*, *year*  >  *course code* Resources
 * Where sem, year and course code are the semester, year and code attributes of
 * the course object.
 */
function makePath() {
    document.title += ` ${course.code} Resources`;

    let semester = document.getElementById("semester");
    semester.innerText = `Semester ${course.semester}, ${course.year}`;

    let courseElem = document.getElementById("course");
    courseElem.innerText = `${course.code} Resources`;
}