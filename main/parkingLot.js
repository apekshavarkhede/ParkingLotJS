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

}
module.exports = ParkingLot
