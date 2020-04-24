class AirPort {
    constructor() {
        this.isFull = false;
    }

    informParkingLotIsFull() {
        this.isFull = true
        return "Parking lot is full"
    }

}
module.exports = new AirPort;