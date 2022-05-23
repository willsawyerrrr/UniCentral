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

    let input = selector.value;
    let program = Program.getProgramByNumber(input.slice(0, 4));

    if (program.number == 2451) {
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
    }

    if (program == null) {
        units.innerText = "Select a program first..."
        duration.innerText = "Select a program first..."
    } else {
        units.innerText = program.units + " units";
        duration.innerText = (program.units / 16) + " years";
    }
}

function firstMajorSelected() {
    let selectorDiv = document.getElementById("program-selector");
    let major1 = document.getElementById("major1");
    let input = major1.value;
    if (input && input != "None") {
        let major2 = document.getElementById("major2");
        if (major2) major2.remove();
        major2 = document.createElement("select");
        major2.id = "major2";
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
