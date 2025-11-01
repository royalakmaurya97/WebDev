// function add(a) {
//     return function (b) {
//         return function (c) {
//             return a + b * c;
//         };
//     };
// }

const add = (a) => (b) => (c) => a + b + c;

console.log(add(2)(4)(7));


// function sendAutoEmail(to) {
//     return function (subject) {
//         return function (body) {
//             console.log(`Sending Email to ${to} with subject ${subject}: ${body}`);
//         };
//     };
// }



// const sendAutoEmail = (to) => (subject) => (body) => console.log(`Sending Email to ${to} with subject ${subject}: ${body}`);

// let step1 = sendAutoEmail("mauryaak13@gmail.com");
// let step2 = step1("New order Confirmation");

// step2("Hey Alok, Here is Somthing for you");


const sendAutoEmail = (to) => (subject) => (body) => `Sending Email to ${to} with subject ${subject}: ${body}`;

let step1 = sendAutoEmail("mauryaak13@gmail.com");
let step2 = step1("New order Confirmation");

console.log(step2("Hey Alok, Here is Somthing for you"));