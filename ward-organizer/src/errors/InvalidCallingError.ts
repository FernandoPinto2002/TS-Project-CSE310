// Custom error used when a calling is not found in the calling tree
export class InvalidCallingError extends Error {
  constructor(callingName: string) {
    // Pass a custom error message to the base Error class
    super(`Calling "${callingName}" does not exist`);

    // Set a specific error name for identification in try/catch blocks
    this.name = "InvalidCallingError";
  }
}