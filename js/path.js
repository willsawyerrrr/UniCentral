/* Course whose assessment grades are to be shown on this page. */
let course = Course.getCourseFromURL();

/*
 * Sets the path to display the appropriate study period and course code.
 * The path is of the following form:
 *      *home icon*  >  Semester *sem*, *year*  >  *course code* *intention*
 * Where sem, year and course code are the semester, year and code attributes of
 * the course object; and intention is either Grades or Resources.
 */
function makePath(intention) {
    document.title = `UniCental | ${course.code} ${intention}`;

    let path = document.getElementById("path");

    let home = document.createElement("a");
    home.href = "index.html";
    path.appendChild(home);

    let icon = document.createElement("img");
    icon.src = "images/home.jpg";
    icon.alt = "Home icon";
    home.appendChild(icon);

    let semCaret = document.createElement("p");
    semCaret.id = "sem-caret";
    semCaret.innerHTML = "&rsaquo;";
    path.appendChild(semCaret);

    let semester = document.createElement("a");
    semester.id = "semester";
    semester.innerText = `Semester ${course.semester}, ${course.year}`;
    path.appendChild(semester);

    let caret = document.createElement("p");
    caret.innerHTML = "&rsaquo;";
    path.appendChild(caret);

    let courseElem = document.createElement("a");
    courseElem.id = "course";
    courseElem.innerText = `${course.code} ${intention}`;
    path.appendChild(courseElem);
}