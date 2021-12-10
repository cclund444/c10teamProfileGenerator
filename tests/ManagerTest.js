const Manager = require('../library/Manager');

test('creates a manager office number', () => {
    const manager = new Manager('Steve', 48, 'test@gmail.com', 3);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('returns manager role', () => {
    const managerRole = new Manager('Steve');
    expect(managerRole.getRole()).toBe('Manager');
});

test("returns manager's office number", () => {
    const managerOfficeNumber = new Manager('Steve', 48, 'test@gmail.com', 3);
    expect(managerOfficeNumber.getOfficeNumber()).toEqual(expect.any(Number));
});