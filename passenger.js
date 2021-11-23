const Person = require('./person');

class Passenger extends Person {
    constructor(name, bags, bagNumber, ticketNumber, ticketClass, seatNumber) {
        super(name, bags);
        this.bagNumber = bagNumber;
        this.ticketNumber = ticketNumber;
        this.ticketClass = ticketClass;
        this.seatNumber = seatNumber;
        this.validDoc = false;
    };

    callAttendant() {
        console.log('Excuse me, Attendant');
    }; 
};

let anthony = new Passenger('Anthony', '398A', '1948-SAE', 'coach');
anthony.callAttendant();
//console.log(anthony.callAttendant());

module.exports = Passenger;