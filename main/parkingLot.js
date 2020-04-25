var owner = require('./owner')
var airportSecurity = require('./airportSecurity')
class ParkingLot {
    constructor() {
        this.car = [];
    }

    // park the car
    parkCar(car) {
        try {
            if (!this.isParkingLotFull()) {
                if (typeof car === 'object') {
                    this.car.push(car)
                    return true
                }
                if (typeof car !== 'object') {
                    throw "car must be an object";
                }
            }
            if (this.isParkingLotFull()) {
                // inform owner and airportSecurity that parking lot is full
                return owner.informParkingLotFull() && airportSecurity.informParkingLotIsFull()
            }
        }
        catch (error) {
            return error
        }
    }

    // unPark the car
    unPark(car) {
        try {
            if (this.checkParkingLotEmpty()) {
                return "no car"
            }
            if (!this.checkParkingLotEmpty()) {
                if (this.car.includes(car)) {
                    this.car.pop(car)
                    owner.informWhenSpaceIsAvailable() // inform owner when space is available in parking lot
                    return true
                }
                else {
                    throw "car not parked"
                }
            }
        } catch (error) {
            return error
        }
    }

    // check parking lot is full
    isParkingLotFull() {
        return !this.checkParkingLotEmpty()
    }

    // check parking lot is empty or not
    checkParkingLotEmpty() {
        return this.car.length === 0
    }

}
module.exports = ParkingLot
