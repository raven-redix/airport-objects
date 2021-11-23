class Airplane {
    constructor(model, engineNumber, passengerCapacity, flightNumber, flightStatus, destination) {
        this.model = model,
        this.engineNumber = engineNumber,
        this.passengerCapacity = passengerCapacity,
        this.flightNumber = flightNumber,
        this.flightStatus = [],
        this.destination = destination
    };

    land(status) {
        this.flightStatus.push(status);
    };
    takeFlight(status) {
        this.flightStatus.push(status);
    };

};

module.exports = Airplane;