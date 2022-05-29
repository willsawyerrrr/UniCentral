addLoadEvent(function() {
    makePath("Grades");
});
addLoadEvent(showAssessments);


let numAssessments = 0;

/* Shows the appropriate grade elements for the current course. */
function showAssessments() {
    if (course.assessments.length == 0) {
        addAssessment();
        return;
    }
    
    for (let assessment of course.assessments) {
        addAssessment(assessment.name, assessment.weighting, assessment.mark);
    }
}

/* Creates an assessment element with the given name, weight and mark. */
function addAssessment(name = "", weight = null, mark = null) {
    let container = document.getElementById("assessments");

    let outer = document.createElement("div");
    outer.classList.add("assessment-outer");
    container.appendChild(outer);

    let title = document.createElement("h3");
    title.classList.add("title");
    title.innerText = `Assessment Item ${++numAssessments}`;
    outer.appendChild(title);

    /* Close button - credit to: 
            https://www.w3schools.com/howto/howto_css_contact_chips.asp. */
    let close = document.createElement("span");
    close.classList.add("close");
    close.innerHTML = "&times;";
    close.onclick = deleteAssessment;
    outer.appendChild(close);

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

/*
 * Deletes the assessment element corresponsing to the close button whose click
 * called this method.
 */
function deleteAssessment() {
    this.parentElement.remove();

    let assessments = document.getElementsByClassName("title");

    numAssessments = 0;
    for (let assessment of assessments) {
        assessment.innerText = `Assessment Item ${++numAssessments}`;
    }

    if (numAssessments == 0) {
        addAssessment();
    }
}

/* Calculates and displays the overall assessment mark and grade. */
function calculate() {
    let totalWeight = 0;
    let overallMark = 0;

    let assessments = document.getElementsByClassName("assessment-inner");
    for (let assessment of assessments) {
        let weightElem = assessment.getElementsByClassName("weight")[0];
        let weight = weightElem.getElementsByTagName("input")[0].value;

        let markElem = assessment.getElementsByClassName("mark")[0];
        let mark = markElem.getElementsByTagName("input")[0].value;

        totalWeight += weight;
        overallMark += weight * mark;
    }

    overallMark /= 100; // make out of 100
    let grade = markToGrade(overallMark);

    let mark = document.getElementById("mark");
    mark.innerHTML = `Overall Mark: &emsp; ${overallMark}%`;

    let gradeElem = document.getElementById("grade");
    gradeElem.innerHTML = `Grade: &emsp; ${grade.number} - ${grade.   name}`
}

/* Saves the entered assessment items and their marks to the user's profile. */
function saveMarks() {
    // not yet implemented
}

function markToGrade(mark) {
    if (mark >= 85) {
        return {number: 7, name: "High Distinction"};
    } else if (mark >= 75) {
        return {number: 6, name: "Distinction"};
    } else if (mark >= 65) {
        return {number: 5, name: "Credit"};
    } else if (mark >= 50) {
        return {number: 4, name: "Pass"};
    } else if (mark >= 45) {
        return {number: 3, name: "Marginal Fail"};
    } else if (mark >= 20) {
        return {number: 2, name: "Fail"};
    } else {
        return {number: 1, name: "Low Fail"};
    }
}
