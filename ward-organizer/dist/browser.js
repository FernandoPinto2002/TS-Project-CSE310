import { WardService } from "./services/WardService.js"; // Service with shared application logic
import { Calling } from "./models/Calling.js"; // Calling type used for recursion
// Create service instance to reuse logic in the browser
const service = new WardService();
// Get DOM elements where content will be displayed
const membersDiv = document.getElementById("members");
const callingsDiv = document.getElementById("callings");
// Async function to render members in the browser
async function renderMembers() {
    const members = await service.loadMembers();
    members.forEach(member => {
        const p = document.createElement("p");
        p.textContent = `${member.name} — ${member.calling ?? "No calling"}`;
        membersDiv.appendChild(p);
    });
}
// Recursive function to render the calling hierarchy in the DOM
function renderCallingTree(calling, container) {
    const div = document.createElement("div");
    div.textContent = calling.name;
    div.classList.add("calling");
    container.appendChild(div);
    // Recursively render all sub-callings
    calling.children.forEach(child => renderCallingTree(child, div));
}
// Render the calling tree starting from the root
function renderCallings() {
    const tree = service.getCallingTree();
    renderCallingTree(tree, callingsDiv);
}
// Run the browser version of the application
renderMembers();
renderCallings();
