import { WardService } from "./services/WardService.js";
import { Calling } from "./models/Calling.js";

const service = new WardService();

async function main() {
    console.log("Loading ward members...\n");

    const members = await service.loadMembers();

    members.forEach(member => {
        console.log(`${member.name} — ${member.calling}`);
    });
}

function printCallingTree(calling: Calling, level = 0) {
    console.log(" ".repeat(level * 2) + "- " + calling.name);

    calling.children.forEach(child =>
        printCallingTree(child, level + 1)
    );
}

main();