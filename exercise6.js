const person = {
    species: "Human",
    breathe() {
        return "Breathing...";
    }
};

const employee = Object.create(person);
employee.company = "Tech Corp";
employee.position = "Developer";

const manager = Object.create(employee);
manager.department = "Engineering";
manager.team = [];

manager.addTeamMember = function(name) {
    this.team.push(name);
};

console.log("Species:", manager.species);
console.log("Company:", manager.company);
console.log("Department:", manager.department);

manager.addTeamMember("Alice");
manager.addTeamMember("Bob");

console.log("Team:", manager.team);