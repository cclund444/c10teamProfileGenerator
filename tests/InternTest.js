const Intern = require('../library/Intern');

test("creates the intern's school", () => {
    const intern = new Intern('Frank', 35, 'test@gmail.com', 'UA');
    expect(intern.school).toEqual(expect.any(String));
});

test("returns the intern's role", () => {
    const internRole = new Intern('Frank');
    expect(internRole.getRole()).toBe('Intern');
});

test("reutns the intern's school", () => {
    const internSchool = new Intern('Frank', 35, 'test@gmail.com', 'UA');
    expect(internSchool.getSchool()).toEqual(expect.any(String));
});