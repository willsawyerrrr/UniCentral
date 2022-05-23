class Program {
    static programs = [
        new Program("Bachelor of Agricultural Science (Honours)", 2450, 16),
        new Program("Bachelor of Computer Science", 2451, 48),
        new Program("Bachelor of Computer Science (Honours)", 2452, 16),
        new Program("Bachelor of Information Technology", 2453, 48),
        new Program("Bachelor of Design", 2454, 48),
        new Program("Bachelor of Engineering (Honours)", 2455, 64),
        new Program("Bachelor of Biotechnology", 2456, 48),
        new Program("Bachelor of Biotechnology (Honours)", 2457, 16),
        new Program("Bachelor of Environmental Science", 2458, 48),
        new Program("Bachelor of Environmental Science (Honours)", 2459, 16),
        new Program("Bachelor of Mathematics", 2460, 48)
    ];

    static compScMajors = [
        "Cyber Security",
        "Data Science",
        "Machine Learning",
        "Programming Languages",
        "Scientific Computing"
    ];

    constructor(name, number, units) {
        this.name = name;
        this.number = number;
        this.units = units;
    }

    static getProgramByNumber(number) {
        for (let program of this.programs) {
            if (program.number == number) {
                return program;
            }
        }

        return null;
    }

    static getProgramByName(name) {
        for (let program of this.programs) {
            if (program.name() == name) {
                return program;
            }
        }

        return null;
    }
}
