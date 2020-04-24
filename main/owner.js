class Owner {
    constructor() {
        this.isFull = false;
    }

    informParkingLotFull() {
        this.isFull = true;
        return "Parking lot is full"
    }

    informWhenSpaceIsAvailable() {
        this.isFull = false;
    }

}
module.exports = new Owner;