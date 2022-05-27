addLoadEvent(setPath);
addLoadEvent(showAssessments);

/* Course whose assessment grades are to be shown on this page. */
let course = Course.getCourseFromURL();

let numAssessments = 0;

/*
 * Sets the path to display the appropriate study period and course code.
 * The path is of the following form:
 *      *home icon*  >  Semester *sem*, *year*  >  *course code* Grades
 * Where sem, year and course code are the semester, year and code attributes of
 * the course object.
 */
function setPath() {
    document.title += ` ${course.code} Grades`;

    let semester = document.getElementById("semester");
    semester.innerText = `Semester ${course.semester}, ${course.year}`;

    let courseElem = document.getElementById("course");
    courseElem.innerText = `${course.code} Grades`;
}

/* Shows the appropriate grade elements for the current course. */
function showAssessments() {
    for (let assessment of course.assessments) {
        addAssessment(assessment.name, assessment.weighting, assessment.mark);
    }
}

function addAssessment(name = "", weight = 0, mark = 0) {
    let content = document.getElementById("content");

    let outer = document.createElement("div");
    outer.classList.add("assessment-outer");
    content.appendChild(outer);

    let title = document.createElement("h3");
    title.innerText = `Assessment Item ${++numAssessments}`;
    outer.appendChild(title);

    let inner = document.createElement("div");
    inner.classList.add("assessment-inner");
    outer.appendChild(inner);


    let nameElem = document.createElement("div");
    nameElem.classList.add("name");
    inner.appendChild(nameElem);

    let namePar = document.createElement("p");
    namePar.innerText = "Name:";
    nameElem.appendChild(namePar);

    let nameInput = document.createElement("input");
    nameInput.placeholder = "Name";
    nameInput.value = name;
    nameElem.appendChild(nameInput);


    let weightElem = document.createElement("div");
    weightElem.classList.add("weight");
    inner.appendChild(weightElem);

    let weightPar = document.createElement("p");
    weightPar.innerText = "Weight:";
    weightElem.appendChild(weightPar);

    let weightInput = document.createElement("input");
    weightInput.placeholder = "0";
    weightInput.value = weight;
    weightElem.appendChild(weightInput);


    let markElem = document.createElement("div");
    markElem.classList.add("mark");
    inner.appendChild(markElem);

    let markPar = document.createElement("p");
    markPar.innerText = "Mark:";
    markElem.appendChild(markPar);

    let markInput = document.createElement("input");
    markInput.placeholder = "0";
    markInput.value = mark;
    markElem.appendChild(markInput);
}
