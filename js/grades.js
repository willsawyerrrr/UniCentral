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
function addAssessment(name = "", weight = 0, mark = 0) {
    let content = document.getElementById("content");

    let outer = document.createElement("div");
    outer.classList.add("assessment-outer");
    content.appendChild(outer);

    let title = document.createElement("h3");
    title.classList.add("title");
    title.innerText = `Assessment Item ${++numAssessments}`;
    outer.appendChild(title);

    /* Close button - credit to: 
            https://www.w3schools.com/howto/howto_css_contact_chips.asp. */
    let close = document.createElement("span");
    close.classList.add("close");
    close.innerHTML = "&times;";
    close.onclick = hideAssessment;
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
 * Hides the assessment element corresponsing to the close button whose click
 * called this method.
 */
function hideAssessment() {
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
