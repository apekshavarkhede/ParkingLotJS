var assert = require('chai').assert
var parkingLotSystem = require('../main/parkingLot')
var owner = require('../main/owner')

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

    // UC2..unPark the car
    it(`given parked car when unpark should return true`, function () {
        let car = {};
        parkingLot.parkCar(car)
        assert.isTrue(parkingLot.unPark(car))
    })

    // throw exception when ask for unpark the car which is not parked
    it(`given not parked car when unpark should throw exception`, function () {
        let car = {};
        let car1 = {}
        parkingLot.parkCar(car)
        assert.equal("car not parked", parkingLot.unPark(car1))
    })

    // UC3.. inform owner when parking lot is full
    it(`inform owner when parking lot is full`, function () {
        let car = {};
        let car1 = {}
        parkingLot.parkCar(car)
        assert.equal(parkingLot.parkCar(car1), owner.informParkingLotFull())
    })

})