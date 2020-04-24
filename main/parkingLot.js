class ParkingLot {
    constructor() {
        this.car = [];
    }

    // park the car
    parkCar(car) {
        try {
            if (typeof car === 'object') {
                this.car.push(car)
                return true
            }
            if (typeof car !== 'object') {
                throw "car must be an object";
            }
        } catch (error) {
            return error
        }
    }

    // unPark the car
    unPark(car) {
        try {
            if (this.car.length === 0) {
                return "no car"
            }
            if (this.car.length > 0) {
                if (this.car.includes(car)) {
                    this.car.pop(car)
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
}
module.exports = ParkingLot
