const Manager = require('../lib/Manager'); // Connecting Manager constructor 
const { default: expect } = require('expect');

test('Generate a new Manager object', () => { // runs test on manager object 
    const manager = new Manager('Santiago', 777, 'campos.santiago138@gmail.com', 5616039988);
    expect(manager.officeNumb).toEqual(expect.any(Number));
});

test('Acquire role of employee', () => { // acquires role from getRole() to run test
    const manager = new Manager('Santiago', 777, 'campos.santiago138@gmail.com');
    expect(manager.getRole()).toEqual("Manager");
});