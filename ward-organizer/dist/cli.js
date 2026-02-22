import { WardService } from "./services/WardService.js"; // Import service that contains the main logic
import { Calling } from "./models/Calling.js"; // Import Calling type for the recursive function
// Create an instance of the service to access its methods
const service = new WardService();
// Main async function that runs the program
async function main() {
    console.log("Loading ward members...\n");
    // Load members asynchronously
    const members = await service.loadMembers();
    // Display each member and their calling in the terminal
    members.forEach(member => {
        console.log(`${member.name} — ${member.calling}`);
    });
}
// Recursive function to print the calling hierarchy
function printCallingTree(calling, level = 0) {
    // Indent output based on depth in the tree
    console.log(" ".repeat(level * 2) + "- " + calling.name);
    // Recursively print all sub-callings
    calling.children.forEach(child => printCallingTree(child, level + 1));
}
// Start the program
main();
