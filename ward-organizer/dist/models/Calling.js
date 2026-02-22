export class Calling {
    constructor(name) {
        this.name = name;
        this.children = [];
    }
    addSubCalling(calling) {
        this.children.push(calling);
    }
}
