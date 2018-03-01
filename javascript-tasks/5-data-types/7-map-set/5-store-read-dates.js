/*
 *
 * There’s an array of messages as in the previous task (4-store-unread-flags).
 * The situation is similar.
 * 
 * The question now is: 
 * which data structure you’d suggest to store the information: “when the message was read?”.
 * 
 * In the previous task we only needed to store the “yes/no” fact.
 * Now we need to store the date and it, once again, should disappear if the message is gone.
 * 
 */

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));
