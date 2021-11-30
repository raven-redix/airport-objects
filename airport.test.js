const Airport = require('./airport');

describe('Airport class', () => {


    test('has a name', () => {
        const testAirport = new Airport('Southwest Airlines');
        expect(testAirport.code).toBe('Southwest Airlines');    
    });

});
//callback
describe('Airport class', () => {
    const CDG = new Airport('CDG');
    test('airports have a country', (done) => {
        
        CDG.getInfo((err, data) => {
            console.log(data);
            expect(err).toBeNull();
            expect(data.country).toEqual('FR');
            done();
        });
    });
});

//Promise
describe("Airport class", () => {
    test("airports have a city", () => {
      const CDG = new Airport("CDG");
      return CDG.getInfo2()
        .then((data) => {
          expect(data.city).toEqual("Paris");
        })
        .catch((err) => {
          expect(err).toBeNull();
        });
    });
  });
//async/await
  describe("Airport class", () => {
    const CDG = new Airport("CDG");
    test("can get information like the city from an airport instance", async () => {
      
      const airport = await CDG.getInfo3();
      expect(airport.city).toEqual("Paris");
    });
  });