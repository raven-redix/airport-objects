const Person = require('./person');

class crewMember extends Person {
    constructor(name, bags, rank, staffNumber) {
        super(name, bags);
        this.rank = rank;
        this.staffNumber = staffNumber;
        this.assignedFlights = [];
        
    };

    assignToFlight(flightNumber) {
        this.assignedFlights.push(flightNumber);
    };
};

module.exports = crewMember;