// Represents a calling in the ward hierarchy
export class Calling {
    // Create a calling with an empty list of sub-callings
    constructor(name) {
        this.name = name;
        this.children = [];
    }
    // Adds a sub-calling to build a hierarchical tree
    addSubCalling(calling) {
        this.children.push(calling);
    }
}
