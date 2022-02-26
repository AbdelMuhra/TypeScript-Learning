var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  logPerson: () => logPerson,
  users: () => users
});
const users = [
  {
    name: "Abdel Ghani Muhra",
    age: 21,
    occupation: "Student"
  },
  {
    name: "John Danaher",
    age: 400,
    occupation: "Jiu-Jitsu"
  }
];
function logPerson(user) {
  console.log(` - ${user.name}, ${user.age}`);
}
console.log("Users:");
users.forEach(logPerson);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  logPerson,
  users
});
//# sourceMappingURL=index.js.map
