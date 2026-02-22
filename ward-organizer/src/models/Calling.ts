// Represents a calling in the ward hierarchy
export class Calling {
    name: string;
    children: Calling[];

    // Create a calling with an empty list of sub-callings
    constructor(name: string) {
        this.name = name;
        this.children = [];
    }

    // Adds a sub-calling to build a hierarchical tree
    addSubCalling(calling: Calling) {
        this.children.push(calling);
    }
}