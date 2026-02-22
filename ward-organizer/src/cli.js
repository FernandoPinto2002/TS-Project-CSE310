import { Member } from "./models/Member.js";
const members = [
    new Member("Fernando", "Elders Quorum"),
    new Member("Carlos", "Bishopric")
];
console.log("Ward Members:");
members.forEach(member => {
    console.log(`${member.name} — ${member.calling}`);
});
//# sourceMappingURL=cli.js.map