/*
 *
 * In simple cases of circular references, we can exclude an offending 
 * property from serialization by its name.
 * 
 * But sometimes there are many backreferences. 
 * And names may be used both in circular references and normal properties.
 * 
 * Write `replacer` function to stringify everything, but remove properties that reference meetup.
 * 
 */

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
  if (key != "" && value == meetup) {
    return undefined;
  } else {
    return value;
  }
}, 2));

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/