class Passenger {
    constructor(name, bagNumber, ticketNumber, ticketClass) {
        this.name = name,
        this.bagNumber = bagNumber,
        this.ticketNumber = ticketNumber,
        this.ticketClass = ticketClass,
        this.validDoc = false
    };
};

module.exports = Passenger;