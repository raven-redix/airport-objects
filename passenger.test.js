const Passenger = require('./passenger')

global.console = {
    log: jest.fn(),
    info: jest.fn(),
    error: jest.fn()
};

describe('Passenger class', () => {
    test('has a name', () => {
        const testPassenger = new Passenger('Jane Smith');
        expect(testPassenger.name).toBe('Jane Smith');
    });
    test('has a bag number', () => {
        const testPassenger = new Passenger('Jane Smith', 3, '278a'); 
        //testPassenger.bagNumber = '278a';
        expect(testPassenger.bagNumber).toBe('278a');
    });
    test('has a ticket number', () => {
        const testPassenger = new Passenger('Jane Smith', '278a', '1341-B');
        testPassenger.ticketNumber = '1341-B';
        expect(testPassenger.ticketNumber).toBe('1341-B');
    });
    test('has a ticket class', () => {
        const testPassenger = new Passenger;
        testPassenger.ticketClass = 'Economy';
        expect(testPassenger.ticketClass).toBe('Economy');
    });
    test('has valid documentation', () => {
        const testPassenger = new Passenger;
        testPassenger.validDoc = true;
        expect(testPassenger.validDoc).toBe(true);
    });
    test('is an instance of a Passenger', () => {
        const testPassenger = new Passenger('Jane Smith', '278a', '1341-B');
        expect(testPassenger instanceof Passenger).toBeTruthy();
    });
    test('has a seat number', () => {
        const testPassenger = new Passenger('Jane Smith', '278a', '1341-B');
        testPassenger.seatNumber = '76A';
        expect(testPassenger.seatNumber).toBe('76A');
    });
    test('callAttendant method', () => {
        const testPassenger = new Passenger('Jane Smith', '278a', '1341-B');
        testPassenger.callAttendant();
        expect(global.console.log).toHaveBeenCalledWith('Excuse me, Attendant');
    });

    //test callAttendant
   
});