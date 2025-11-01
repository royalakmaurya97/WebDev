const students = ["Alok", "Piyush", "Rohit", "Amit", 'Sumit', 54]

// function print(n) {
//     console.log(n);
// }
// students.forEach(print);

// OR
// students.forEach((val) => console.log(val))

// students.map((val) => console.log(val));

const number = [1,2,3,4,5,6];
// let newArr = [];

// number.forEach((num) => newArr.push(num * 2));
// console.log(newArr);


// function double(n) {        // Undefined (forEach are not return new Array while map are retun new Array)
//     return n * 2;
// }
// let newArr1 = number.forEach(double);
// console.log(newArr1)



// function double(n) { 
//     return n * 2;
// }
// let newArr1 = number.map(double);
// console.log(newArr1)



// let ans = number.find((num) => num === 2 *2)
// console.log(ans);


// findIndex
// let ans1 = number.findIndex((num) => num === 2 * 2)
// console.log("Value of index:",number[ans1]);
// console.log("index is:",ans1);


//includes
// console.log(number.includes(3));


// //filter
// const evenNum = number.filter(num => num % 2 == 0);
// console.log(evenNum);


// #slice and splice

let newArr2 = number.slice(1, 4);
console.log(newArr2);
let newArr3 = number.splice(1, 4);      // remove element in array
console.log(newArr3);
console.log(number)