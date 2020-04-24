var assert = require('chai').assert
var parkingLotSystem = require('../main/parkingLot')

describe(`Testing for parking lot`, function () {

    //  UC1.. park the car
    it(`given car  when ask to park should return true`, function () {
        let parkingLot = new parkingLotSystem()
        let carObject = {};
        assert.isTrue(parkingLot.parkCar(carObject))
    })

    // throw exception when carObject is not
    it(`given car not an object when ask to park should throw exception`, function () {
        let parkingLot = new parkingLotSystem()
        let carObject = 0;
        assert.equal(parkingLot.parkCar(carObject), "car must be an object")
    })

})