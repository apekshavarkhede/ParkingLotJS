class ParkingLot {
    constructor() {
        this.car = [];
    }

    parkCar(car) {
        this.car.push(car)
        return true
    }

}
module.exports = ParkingLot
