// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(menu);

multiplyNumeric(menu);

// after the call
console.log(menu);

// function
function multiplyNumeric(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] == "number") obj[prop] *= 2;
  }
}
