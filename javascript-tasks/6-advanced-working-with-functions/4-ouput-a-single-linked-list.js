/*
 *
 * Write a function printList(list) that outputs list items one-by-one.
 * Make two variants of the solution: using a loop and using recursion.
 * 
 */

function printList(list) {
  console.log(list.value);

  if (list.next) {
    printList(list.next);
  }
}

function reversePrintList(list) {
  if (list.next) {
    reversePrintList(list.next);
  }
  
  console.log(list.value);
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printList(list);

reversePrintList(list);