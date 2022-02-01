const engineer = require("../engineer");
const Engineer = require("../src/Employees/engineer");

test('creates an Engineer object', () => {
    const engineer = new Engineer('Alisa', 23, 'ealisa818@gmail', 'ealisa818');
    
    expect(engineer.name) .toEqual(expect.any(String));
});

test('creates an Engineer object', () => {
    const engineer = new Engineer('Alisa', 23, 'ealisa818@gmail', 'GIT');
    
    expect(engineer.github) .toEqual(expect.any(Number));
});
