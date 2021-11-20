const Airplane = require('./airplane');

describe('Airplane class', () => {
    test('has a model number', () => {
        const testAirplane = new Airplane(1);
        expect(testAirplane.model).toBe(1);
    });
    test('has a engine number', () => {
        const testAirplane = new Airplane(1, 37);
        expect(testAirplane.engineNumber).toBe(37);
    });
    test('has passenger capacity', () => {
        const testAirplane = new Airplane(1, 37, 200);
        expect(testAirplane.passengerCapacity).toBe(200);
    });
    test('has a flight number', () => {
        const testAirplane = new Airplane(1, 37, 200, 35);
        expect(testAirplane.flightNumber).toBe(35);
    });
    test('has a flight status', () => {
        const testAirplane = new Airplane(1, 37, 200, 35);
        testAirplane.flightStatus = 'in flight';
        expect(testAirplane.flightStatus).toBe('in flight');
    });
    test('has a destination', () => {
        const testAirplane = new Airplane(1, 37, 200, 35);
        testAirplane.destination = 'Denver, Co';
        expect(testAirplane.destination).toBe('Denver, Co');
    });

});