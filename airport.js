const fs = require('fs');
const { readFile } = require("fs/promises");
class Airport {
    constructor(code) {
        //this.name = name
        this.code = code
    };
    //callback
    getInfo(callback) {
        fs.readFile('./airportsData.json', (err, data) => {
            const airports = JSON.parse(data);
            const airport = airports.find((airport) => airport.iata === this.code);
            callback(err, airport);
        });
    };
    //Promise
    getInfo2() {
        return new Promise((resolve, reject) => {
          fs.readFile("./airportsData.json", (err, data) => {
            if (err) return reject(err);
    
            const airports = JSON.parse(String(data));
            const [airport] = Object.keys(airports)
              .filter((airportCode) => airports[airportCode].iata === this.code)
              .map((airportCode) => airports[airportCode]);
    
            resolve(airport);
          });
        });
    };
    //async/await
    async getInfo3() {
        try {
          const data = await readFile("./airportsData.json");
          const airports = JSON.parse(data);
          const airport = airports.find((airport) => airport.iata === this.code);
          return airport;
        } catch (err) {
          console.log(err);
        }
      }


};


 
module.exports = Airport;