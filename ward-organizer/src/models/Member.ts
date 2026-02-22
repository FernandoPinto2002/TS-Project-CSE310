// Represents a member of the ward
export class Member {
    name: string;
    calling?: string; // Optional because a member may not have a calling yet

    // Creates a new member with a name and an optional calling
    constructor(name: string, calling?: string) {
        this.name = name;
        this.calling = calling;
    }

    // Assigns or updates the member's calling
    assignCalling(callingName: string) {
        this.calling = callingName;
    }
}