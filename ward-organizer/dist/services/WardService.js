import { Member } from "../models/Member.js";
import { Calling } from "../models/Calling.js";
import { InvalidCallingError } from "../errors/InvalidCallingError.js";
export class WardService {
    // Async function that simulates loading members
    async loadMembers() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    new Member("Fernando", "Elders Quorum"),
                    new Member("Carlos", "Bishopric"),
                    new Member("Ana", "Relief Society")
                ]);
            }, 1000);
        });
    }
    // Builds and returns the calling hierarchy (tree structure)
    getCallingTree() {
        const bishopric = new Calling("Bishopric");
        const elders = new Calling("Elders Quorum");
        const relief = new Calling("Relief Society");
        bishopric.addSubCalling(elders);
        bishopric.addSubCalling(relief);
        return bishopric;
    }
    // Assigns a calling after validating it exists
    assignCalling(member, callingName, root) {
        if (!this.callingExists(callingName, root)) {
            throw new InvalidCallingError(callingName);
        }
        member.assignCalling(callingName);
    }
    // Recursive function used to search the calling tree
    callingExists(name, calling) {
        if (calling.name === name) {
            return true;
        }
        for (const child of calling.children) {
            if (this.callingExists(name, child)) {
                return true;
            }
        }
        return false;
    }
}
