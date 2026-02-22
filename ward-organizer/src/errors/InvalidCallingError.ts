export class InvalidCallingError extends Error {
  constructor(callingName: string) {
    super(`Calling "${callingName}" does not exist`);
    this.name = "InvalidCallingError";
  }
}