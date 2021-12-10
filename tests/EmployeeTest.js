const Employee = require('../library/Employee');


test('creates an Employee object', () => {
    const employee = new Employee('Harry', 40, 'test@gmail.com');

    expect(employee.name).toBe('Harry');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('test@gmail.com');

});

test('creates an employee name', () => {
    const employee = new Employee('Harry');
    expect(employee.getName()).toBe('Harry');
});

test('gets an employee id', () => {
    const employeeId = new Employee('Harry', 40);
    expect(employeeId.getId()).toEqual(expect.any(Number));
});

test('gets an employee email', () => {
    const employeeEmail = new Employee('Harry', 40, 'test@gmail.com');
    expect(employeeEmail.getEmail()).toBe('test@gmail.com');
});

test('return employee role', () => {
    const employeeRole = new Employee('Harry');
    expect(employeeRole.getRole()).toBe('Employee');
});