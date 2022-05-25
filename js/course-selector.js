addLoadEvent(initOptions);

/* Initialises the options for the program selector. */
function initOptions() {
    let selector = document.getElementById("program");
    for (let program of Program.programs) {
        let option = document.createElement("option");
        option.value = program.number;
        option.innerText = program.number + " - " + program.name;
        selector.appendChild(option);
    }
}

/* Updates the program information to match the selected program. */
function programSelected() {
    let selectorDiv = document.getElementById("program-selector");
    let selector = document.getElementById("program");
    let units = document.getElementById("units");
    let duration = document.getElementById("duration");

    let notYet = document.getElementById("not-yet");
    if (notYet) notYet.remove();

    let coreCourses = document.getElementsByClassName("core");
    if (coreCourses) while (coreCourses[0]) coreCourses[0].remove();

    let major1courses = document.getElementsByClassName("major1");
    if (major1courses) while (major1courses[0]) major1courses[0].remove();

    let major2courses = document.getElementsByClassName("major2");
    if (major2courses) while (major2courses[0]) major2courses[0].remove();

    let input = selector.value;
    let program = Program.getProgramByNumber(input.slice(0, 4));
    showCore(program);

    if (program.number == 2451) { // Computer Science
        let major1 = document.createElement("select");
        major1.id = "major1";
        major1.onchange = firstMajorSelected;
        selectorDiv.appendChild(major1);

        let selected = document.createElement("option");
        selected.innerText = "Select a Major";
        selected.selected = true;
        selected.disabled = true;
        selected.hidden = true;
        major1.appendChild(selected);

        let none = document.createElement("option");
        none.innerText = "None";
        none.value = "None";
        major1.appendChild(none);

        for(let major of majors) {
            let option = document.createElement("option");
            option.innerText = major;
            option.value = major;
            major1.appendChild(option);
        }
    } else {
        let major1 = document.getElementById("major1");
        if (major1) major1.remove();
        let major2 = document.getElementById("major2");
        if (major2) major2.remove();

        let notYet = document.createElement("p");
        notYet.id = "not-yet";
        notYet.innerText = "We haven't implemented that yet... Try BCompSc";
        selectorDiv.appendChild(notYet);
    }

    if (program == null) {
        units.innerText = "Select a program first..."
        duration.innerText = "Select a program first..."
    } else {
        units.innerText = program.units + " units";
        duration.innerText = (program.units / 16) + " years";
    }
}

/* Create a second major selector. */
function firstMajorSelected() {
    let selectorDiv = document.getElementById("program-selector");
    let major1 = document.getElementById("major1");
    let input = major1.value;

    let major2 = document.getElementById("major2");
    if (major2) major2.remove();

    let major1courses = document.getElementsByClassName("major1");
    if (major1courses) while (major1courses[0]) major1courses[0].remove();

    let major2courses = document.getElementsByClassName("major2");
    if (major2courses) while (major2courses[0]) major2courses[0].remove();

    if (input != "None") {
        showMajor(1);
        major2 = document.createElement("select");
        major2.id = "major2";
        major2.onchange = showMajor;
        selectorDiv.appendChild(major2);

        let selected = document.createElement("option");
        selected.innerText = "Select a Major";
        selected.selected = true;
        selected.disabled = true;
        selected.hidden = true;
        major2.appendChild(selected);

        let none = document.createElement("option");
        none.innerText = "None";
        none.value = "None";
        major2.appendChild(none);

        let restricted = JSON.parse(JSON.stringify(majors));
        let i;
        for (i = 0; i < restricted.length; i++) {
            if (restricted[i] == input) break;
        }
        restricted.splice(i, 1);

        for(let major of restricted) {
            let option = document.createElement("option");
            option.value = major;
            option.innerText = major;
            major2.appendChild(option);
        }
    }
}

function showCore(program) {
    if (program.number != 2451) return;

    for (let course of core) {
        showCourse(course, "core");
    }
}

function showMajor(majorNum = 2) {
    let majorId = (majorNum == 1) ? "major1" : "major2";
    let majorName = document.getElementById(majorId).value;

    let major;
    switch (majorName) {
        case "Cyber Security":
            major = cyber;
            break;
        case "Data Science":
            major = data;
            break;
        case "Machine Learning":
            major = machine;
            break;
        case "Programming Languages":
            major = programming;
            break;
        case "Scientific Computing":
            major = scientific;
            break;
        default:
            major = null;
    }

    let major2courses = document.getElementsByClassName("major2");
    if (major2courses) while (major2courses[0]) major2courses[0].remove();

    let className = (majorNum == 1) ? "major1" : "major2";
    for (let course of major) {
        showCourse(course, className);
    }
}

function showCourse(course, className) {
    let courses = document.getElementById("courses");

    let div = document.createElement("div");
    div.classList.add("course");
    div.classList.add(className);
    courses.appendChild(div);

    let code = document.createElement("a");
    code.href = "https://my.uq.edu.au/programs-courses/course.html?course_code=" + course.code;
    code.innerText = course.code;
    div.appendChild(code);

    let name = document.createElement("p");
    name.innerText = course.name;
    div.appendChild(name);
}
