export class Member {
    constructor(name, calling) {
        this.name = name;
        this.calling = calling;
    }
    assignCalling(callingName) {
        this.calling = callingName;
    }
}
