/* Create the function topSalary(salaries) that returns the name of the top-paid person.
 *
 *  If salaries is empty, it should return null.
 *  If there are multiple top-paid persons, return any of them.
 *
 * P.S. Use Object.entries and destructuring to iterate over key/value pairs.
 */

function topSalary(salaries) {
  if (Object.entries(salaries).length === 0) return null;

  let mapSalaries = new Map();
  let maxSalary = 0;

  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) maxSalary = salary;
    if (!mapSalaries.has(salary)) mapSalaries.set(salary, name);
  }

  return mapSalaries.get(maxSalary);
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Jonathan": 300,
  "Mary": 250
};

console.log( topSalary(salaries) );