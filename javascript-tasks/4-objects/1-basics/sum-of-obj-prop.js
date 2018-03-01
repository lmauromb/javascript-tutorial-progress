function sumSalaries(salaries) {
  let totalSalaries = 0;

  for (let person in salaries) {
    if (typeof salaries[person] == "number") {
      totalSalaries += salaries[person];
    } else {
      continue;
    }
  }

  return totalSalaries;
}

let salaries = {
    John: 100
    , Ann: 160
    , Pete: 130
    , Luis: "Not a Number"
};

console.log( sumSalaries(salaries) );
