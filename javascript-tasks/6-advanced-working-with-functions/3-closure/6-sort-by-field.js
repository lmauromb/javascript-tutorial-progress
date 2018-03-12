function byField(field) {
  return function(a, b) {
    return a[field] > b[field] ? 1 : -1;
  };
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

// by name (Ann, John, Pete)
console.log( users.sort((a, b) => a.name > b.name ? 1 : -1) );

// by age (Pete, Ann, John)
console.log( users.sort((a, b) => a.age > b.age ? 1 : -1) );

console.log( users.sort(byField('name')) );
console.log( users.sort(byField('age')) );