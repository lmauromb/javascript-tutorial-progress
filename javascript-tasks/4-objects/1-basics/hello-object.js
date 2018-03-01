function createUser(name, surname) {
  return {
    name,
    surname,
  };
}

let user = createUser("John", "Smith");

console.log(user);

user["name"] = "Pete";
delete user["surname"];

console.log(user);
