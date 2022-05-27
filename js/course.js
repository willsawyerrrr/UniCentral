class Assessment {
    /* The name of this assessment item. */
    #name;
    /* The weighting of this assessment item. */
    #weighting;
    /* The mark earned on this assessment item, out of 100. */
    #mark;

    constructor(name, weighting, mark) {
        this.#name = name;
        this.#weighting = weighting;
        this.#mark = mark;
    }

    get name() {
        return this.#name;
    }

    get weighting() {
        return this.#weighting;
    }

    get mark() {
        return this.#mark;
    }
}

class Course {
    /* The code for this course. */
    #code;
    /* The name of this course. */
    #name;
    /* The year this course was studied. */
    #year;
    /* The semester this course as studied. */
    #semester;
    /* The assessments completed for this course. */
    #assessments;

    /* Courses I have studied to date. */
    static courses = [
        new Course("ENGG1001", "Programming for Engineers", 2021, 1),
        new Course("ENGG1100", "Professional Engineering", 2021, 1),
        new Course("MATH1051", "Calculus & Linear Algebra I", 2021, 1),

        new Course("CSSE2002", "Programming in the Large", 2021, 2),
        new Course("CSSE2010", "Introduction to Computer Systems", 2021, 2),
        new Course("INFS1200", "Introduction to Information Systems", 2021, 2),
        new Course("MATH1061", "Discrete Mathematics", 2021, 2),
        
        new Course("COMP2048", "Theory of Computing", 2022, 1, [
            new Assessment("Codebreaking Laboratory", 15, 100),
            new Assessment("Game of Life Laboratory", 15, 14.5/15*100),
            new Assessment("Project", 30, 0),
            new Assessment("Quiz", 10, 100),
            new Assessment("Final Exam", 30, 0)
        ]),
        new Course("CSSE2310", "Computer Systems Principles & Programming", 2022, 1, [
            new Assessment("Assignment 1", 15, 23.15/65*100),
            new Assessment("Assignment 2", 15, 49/50*100),
            new Assessment("Assignment 3", 15, 0),
            new Assessment("Assignment 4", 15, 0),
            new Assessment("Final Exam", 40, 0)
        ]),
        new Course("DECO1400", "Introduction to Web Design", 2022, 1, [
            new Assessment("Quiz 1", 10, 100),
            new Assessment("Quiz 2", 10, 100),
            new Assessment("Peerwise", 10, 0),
            new Assessment("Design Report", 20, 0),
            new Assessment("Website Implementation", 33, 0),
            new Assessment("Report", 7, 0),
            new Assessment("Presentation", 10, 0)
        ])
    ]

    constructor(code, name, year, semester, assessments = []) {
        this.#code = code;
        this.#name = name;
        this.#year = year;
        this.#semester = semester;
        this.#assessments = assessments;
    }

    get code() {
        return this.#code;
    }

    get name() {
        return this.#name;
    }
    
    get year() {
        return this.#year;
    }
    
    get semester() {
        return this.#semester;
    }
    
    get assessments() {
        return this.#assessments;
    }

    /*
     * Returns the course corresponding to the given code. If no such course
     * exists, returns null.
     */
    static getCourseByCode(code) {
        for (let course of this.courses) {
            if (course.code == code.toUpperCase()) {
                return course;
            }
        }

        return null;
    }

    /*
     * Returns an array containing all courses corresponding to the given year
     * and semester. If no such courses exist, an empty array is returned.
     */

    static getCourseBySemester(year, semester) {
        let result = [];
        for (let course of this.courses) {
            if (course.year == year && course.semester == semester) {
                result.add(course);
            }
        }

        return result;
    }

    /*
     * Returns the course corresponding to the code given in URL parameters. If
     * no such course exists, returns null.
     */
    static getCourseFromURL() {
        let params = new URLSearchParams(window.location.search);
        let code = params.get("course");

        return this.getCourseByCode(code);
    }
}

/* Shows the given course and assigns it the given class name. */
function showCourse(course, href, className = "") {
    let courses = document.getElementById("courses");

    let div = document.createElement("div");
    div.classList.add("course");
    if (className) {
        div.classList.add(className);
    }
    div.id = course.code.toLowerCase();
    courses.appendChild(div);

    let link = document.createElement("a");
    link.href = href;
    div.appendChild(link);

    let code = document.createElement("p");
    code.classList.add("code");
    code.innerText = course.code;
    link.appendChild(code);

    let name = document.createElement("p");
    name.innerText = course.name;
    link.appendChild(name);
}
