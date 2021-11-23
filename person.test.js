const Person = require('./person');
const Bag = require('./bag');

describe('Person', () => {
    const testPerson = new Person('Rachel');
    const testBag = new Bag(12);

    test('has a name', () => {
        expect(testPerson.name).toBe('Rachel');
    });

    test('has a bag', () => {
        testPerson.addBag(testBag);
        expect(testPerson.bags.length).toBe(1);
        //expect(testBag.bags[0]).toBe(testBag);
    });
    
});