import { Member } from "../models/Member.js";
import { Calling } from "../models/Calling.js";
import { InvalidCallingError } from "../errors/InvalidCallingError.js";

export class WardService {

    async loadMembers(): Promise<Member[]> {
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
    getCallingTree(): Calling {
        const bishopric = new Calling("Bishopric");
        const elders = new Calling("Elders Quorum");
        const relief = new Calling("Relief Society");

        bishopric.addSubCalling(elders);
        bishopric.addSubCalling(relief);

        return bishopric;
    }
    assignCalling(member: Member, callingName: string, root: Calling) {
    if (!this.callingExists(callingName, root)) {
        throw new InvalidCallingError(callingName);
    }

    member.assignCalling(callingName);
}

private callingExists(name: string, calling: Calling): boolean {
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




    