const crewMember = require('./crew');

describe('crewMember class', () => {
    test('has a name', () => {
        const testCrewMem = new crewMember('Alan Anderson');
        expect(testCrewMem.name).toBe('Alan Anderson');
    });
    test('has a rank', () => {
        const testCrewMem = new crewMember('Alan Anderson', 'first officer');
        expect(testCrewMem.rank).toBe('first officer');
    });
    test('assignToFlight method should give member an assignedFlight', () => {
        const testCrewMem = new crewMember('Alan Anderson', 'first officer');
        testCrewMem.assignToFlight(137);
        expect(testCrewMem.assignedFlights).toStrictEqual([137]);
    });
});