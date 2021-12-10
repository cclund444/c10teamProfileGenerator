const Engineer = require('../library/Engineer');

test("creates an engineer's github", () => {
    const engineer = new Engineer('Harry', 40, 'test@gmail.com', 'githubusername');
    expect(engineer.github).toBe('githubusername');
});

test("returns the engineer's role", () => {
    const engineerRole = new Engineer('Harry');
    expect(engineerRole.getRole()).toBe('Engineer');
});

test("returns the engineer's github", () => {
    const engineerGithub = new Engineer('Harry', 40, 'test@gmail.com', 'githubusername');
    expect(engineerGithub.getGithub()).toEqual(expect.any(String));
});