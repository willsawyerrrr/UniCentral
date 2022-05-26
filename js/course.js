class Course {
    /* Courses I have studied to date. */
    static courses = [
        new Course("ENGG1001", "Programming for Engineers", 2021, 1),
        new Course("ENGG1100", "Professional Engineering", 2021, 1),
        new Course("MATH1051", "Calculus & Linear Algebra I", 2021, 1),

        new Course("CSSE2002", "Programming in the Large", 2021, 2),
        new Course("CSSE2010", "Introduction to Computer Systems", 2021, 2),
        new Course("INFS1200", "Introduction to Information Systems", 2021, 2),
        new Course("MATH1061", "Discrete Mathematics", 2021, 2),
        
        new Course("COMP2048", "Theory of Computing", 2022, 1),
        new Course("CSSE2310", "Computer Systems Principles & Programming", 2022, 1),
        new Course("DECO1400", "Introduction to Web Design", 2022, 1)
    ]

    constructor(code, name, year, semester) {
        this.code = code;
        this.name = name;
        this.year = year;
        this.semester = semester;
    }

    /*
     * Returns the course corresponding to the given code. If no such course
     * exists, returns null.
     */
    static getCourseByCode(code) {
        for (let course of this.courses) if (course.code == code) return course;

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
        let code = params.get("course").toUpperCase();

        return this.getCourseByCode(code);
    }
}
