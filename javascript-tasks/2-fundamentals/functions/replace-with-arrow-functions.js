'use stict';

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

let ask_arrow = (question, yes, no) => confirm(question) ? yes() : no();


ask_arrow(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);
