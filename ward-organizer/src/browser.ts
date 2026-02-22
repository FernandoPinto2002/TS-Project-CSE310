import { WardService } from "./services/WardService.js";
import { Calling } from "./models/Calling.js";

const service = new WardService();

const membersDiv = document.getElementById("members")!;
const callingsDiv = document.getElementById("callings")!;

// Render members
async function renderMembers() {
  const members = await service.loadMembers();

  members.forEach(member => {
    const p = document.createElement("p");
    p.textContent = `${member.name} — ${member.calling ?? "No calling"}`;
    membersDiv.appendChild(p);
  });
}

// Recursive render of calling tree
function renderCallingTree(calling: Calling, container: HTMLElement) {
  const div = document.createElement("div");
  div.textContent = calling.name;
  div.classList.add("calling");

  container.appendChild(div);

  calling.children.forEach(child =>
    renderCallingTree(child, div)
  );
}

function renderCallings() {
  const tree = service.getCallingTree();
  renderCallingTree(tree, callingsDiv);
}

// Run everything
renderMembers();
renderCallings();