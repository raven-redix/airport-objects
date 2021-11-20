const Bag = require("./bag");

describe('Bag class', () => {
    test('bag has a weight', () => {
        //make an instance of class Bag with a specific argument (in)
        //stub is a value provided for the sake of testing
        const testBag = new Bag(16);
        //test the properties of our object to see that they
        //have the expected value
        //spy calls a function to test it
        expect(testBag.weight).toBe(16);
    });
    test('bag has a valid weight, weight must be positive and less than 25', () => {
        const testBag = new Bag(0);
        expect(testBag.valid_weight()).toBe(false);
    });
});