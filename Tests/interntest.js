const Intern = require("..git/Intern");

test('creates an Intern object', () => {
    const intern = new Intern('Alisa', 23, 'ealisa818@gmail', 'GIT');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('creates an Intern object', () => {
    const intern = new Intern('Alisa', 23, 'ealisa818@gmail', 'GIT');
    
    expect(intern.id) .toEqual(expect.any(Number));
});

