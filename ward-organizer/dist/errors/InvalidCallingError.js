export class InvalidCallingError extends Error {
    constructor(callingName) {
        super(`Calling "${callingName}" does not exist`);
        this.name = "InvalidCallingError";
    }
}
