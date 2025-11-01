// Loops

// for(let i=0; i<=10; i++){
//     console.log('Alok' + i);
// }



// let ip=0;
// let house = 100

// while(ip != house) {
//     ip = ip + 1;
//     console.log('Step Taken' + ip);
// }



// Guess the input

let number = 40;
let guess = 0;

do {
    guess = parseInt(prompt("Guess a number"))
    if(guess == number) {
        alert('Winner')
        break;
    }
} while(guess != 0)