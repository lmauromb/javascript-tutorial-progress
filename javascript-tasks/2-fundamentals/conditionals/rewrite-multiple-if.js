'use strict';

const userRoles = ['Director', 'CEO', 'Employee', ''];
let message;
let login = userRoles[Math.floor(Math.random() * 4)];

// if (login == 'Employee') {
//     message = 'Hello';
// } else if (login == 'Director') {
//     message = 'Greetings';
// } else if (login == '') {
//     message = 'No login';
// } else {
//     message = '';
// }

message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
    '';

console.log(message);
