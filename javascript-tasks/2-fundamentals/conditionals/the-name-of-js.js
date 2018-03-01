'use strict';

const readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is the "official" name of JavaScript?\n', (answer) => {
    if (answer == 'ECMAScript') {
        console.log('Right!');
    } else {
        console.log('You don\'t know? "ECMAScript"!');
    }
  
    rl.close();
});
