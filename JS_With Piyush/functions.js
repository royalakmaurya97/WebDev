// Function

// function sayHello() {
//     console.log('Hello Piyush')
// }
// sayHello()

// // argument
// function add(a, b) {
//     console.log(a + b);
// }
// add(5, 10)      // Parameters


// function multiply(a, b) {
//     // console.log(a * b);
//     return a * b;
// }

// let a = multiply(10,5)
// console.log('That hey user result is:', a);



// Unlimited Arguments accept
function addNumber () {
    let ans = 0;
    for(let i=0; i<arguments.length; i++) {
        ans += arguments[i];
    }
    return ans;
}

function addNumberV2(...Alok) {         // spread Operator
    let ans = 0;
    for(let i=0; i<Alok.length; i++){
        ans += Alok[i];
    }
    return ans;
}

let result = addNumberV2(10,21,234, 34,654, 43, 342);
console.log('Total number is:', result);