class Owner {
    constructor() {
        this.isFull = false;
    }

    informParkingLotFull() {
        this.isFull = true;
        return "Parking lot is full"
    }

}
module.exports = new Owner;