export class Member {
    name: string;
    calling?: string;

    constructor(name: string, calling?: string) {
        this.name = name;
        this.calling = calling;
    }

    assignCalling(callingName: string) {
        this.calling = callingName;
    }
}