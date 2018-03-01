let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ john, pete, mary ];

sortByName(arr);

// now: [john, mary, pete]
console.log(arr); // Mary

function sortByName(arr) {
  arr.sort((previousUser, currentUser) => previousUser.name > currentUser.name, '');
}