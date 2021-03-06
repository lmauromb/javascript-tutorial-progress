/*
 *
 * There’s an array of messages:
 * 
 * Your code can access it, but the messages are managed by someone else’s code. 
 * New messages are added, old ones are removed regularly by that code, 
 * and you don’t know the exact moments when it happens.
 * 
 * Now, which data structure you could use to store information 
 * whether the message “have been read”? The structure must be well-suited to give 
 * the answer “was it read?” for the given message object.
 * 
 * P.S. When a message is removed from messages, 
 * it should disappear from your structure as well.
 * 
 * P.P.S. We shouldn’t modify message objects directly. 
 * If they are managed by someone else’s code, 
 * then adding extra properties to them may have bad consequences.
 *
 */

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages has 2 elements

readMessages.add(messages[0]);
// still 2 elements

console.log(`Is ${messages[0].text} read? 
${readMessages.has(messages[0]) ? 'si' : 'no'}`);
