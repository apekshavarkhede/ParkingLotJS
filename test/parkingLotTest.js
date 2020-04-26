var assert = require('chai').assert
var parkingLotSystem = require('../main/parkingLot')
var owner = require('../main/owner')
var airportSecurity = require('../main/airportSecurity')

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
        try {
            let carObject = 0;
            let parkCar = parkingLot.parkCar(carObject)
        } catch (error) {
            assert.equal(error.message, "car must be an object")
        }
    })

    // UC2..unPark the car
    it(`given parked car when unpark should return true`, function () {
        let car = {};
        parkingLot.parkCar(car)
        assert.isTrue(parkingLot.unPark(car))
    })

    // throw exception when ask for unpark the car which is not parked
    it(`given not parked car when unpark should throw exception`, function () {
        try {
            let car = {};
            let car1 = {}
            parkingLot.parkCar(car)
            let unParkCar = parkingLot.unPark(car1)
        }
        catch (error) {
            assert.equal("car not parked", error.message);

        }
    })

    // UC3.. inform owner when parking lot is full
    it(`inform owner when parking lot is full`, function () {
        let car = {};
        let car1 = {}
        parkingLot.parkCar(car)
        assert.equal(parkingLot.parkCar(car1), owner.informParkingLotFull())
    })

    // UC4.. inform airport security personal when parking lot is full
    it(`inform airport security personal when parking lot is full`, function () {
        let car = {};
        let car1 = {}
        parkingLot.parkCar(car)
        assert.equal(parkingLot.parkCar(car1), airportSecurity.informParkingLotIsFull())
    })

    //UC5.. inform owner when parking lot is empty
    it(`inform owner when parking lot is empty`, function () {
        let car = {};
        parkingLot.parkCar(car)
        let result = parkingLot.unPark(car)
        assert.isTrue(result)
    })

})