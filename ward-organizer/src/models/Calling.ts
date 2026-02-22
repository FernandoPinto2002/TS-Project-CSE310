export class Calling {
    name: string;
    children: Calling[];

    constructor(name: string) {
        this.name = name;
        this.children = [];
    }

    addSubCalling(calling: Calling) {
        this.children.push(calling);
    }
}