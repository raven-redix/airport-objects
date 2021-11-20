const Airport = require('./airport');

describe('Airport class', () => {
    test('has a name', () => {
        const testAirport = new Airport('Southwest Airlines');
        expect(testAirport.name).toBe('Southwest Airlines');    
    });

});