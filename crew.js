class crewMember {
    constructor(name, rank) {
        this.name = name,
        this.rank = rank,
        this.assignedFlights = []
        
    };

    assignToFlight(flightNumber) {
        this.assignedFlights.push(flightNumber);
    };
};

module.exports = crewMember;