const Intern = require('../lib/Intern'); // connects Intern constructor
const { default: expect } = require('expect');  

test('Generates an Intern object', () => { // generates intern object to run test
    const intern = new Intern('Santiago', 333, 'campos.santiago138@gmail.com', 'UCBERK');
    expect(intern.school).toEqual(expect.any(String));
});

test('Acquires employee school', () => { // acquires school from getSchool() to run test
    const intern = new Intern('Santiago', 333, 'campos.santiago138@gmail.com', 'UCBERK');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('Acquires role of employee', () => { // acquires role from getRole() to run test
    const intern = new Intern('Santiago', 333, 'campos.santiago138@gmail.com', 'UCBERK');
    expect(intern.getRole()).toEqual("Intern");
})