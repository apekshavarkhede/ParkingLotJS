var assert = require('chai').assert
var parkingLotSystem = require('../main/parkingLot')

describe(`Testing for parking lot`, function () {

    let parkingLot;
    beforeEach(function () {
        parkingLot = new parkingLotSystem();
    })

    //  UC1.. park the car
    it(`given car  when ask to park should return true`, function () {
        let carObject = {};
        assert.isTrue(parkingLot.parkCar(carObject))
    })

    // throw exception when car is not object type
    it(`given car not an object when ask to park should throw exception`, function () {
        let carObject = 0;
        assert.equal(parkingLot.parkCar(carObject), "car must be an object")
    })

})