const Manager = require("..mit/Manager");

test('creates an Manager object', () => {
    const manager = new Manager('Alisa', 23, 'ealisa818@gmail', 'D-6');
    
    expect(Manager.email) .toEqual(expect.any(string));
});

test('creates an Manager object', () => {
    const manager = new Manager('Alisa', 23, 'ealisa818@gmail', 'D-6');
    
    expect(Manager.id) .toEqual(expect.any(mumber));
});
