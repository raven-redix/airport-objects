class Bag {
    constructor(weight) {
        this.weight = weight,
        this.valid_weight = function () {
            if(this.weight > 0 && this.weight < 25) {
                return true;
            } else {
                return false;
            };
        };
    };
};

//these are commented out because normally you wouldn't have the console.log 
//in your code, it's just to check that things are working correctly
//const testBag = new Bag(16)
//console.log(testBag)

module.exports = Bag;

