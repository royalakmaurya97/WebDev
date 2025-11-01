// High Order Function and Callback
//  High Order Func => which are accept a function as a Argument

function add(a, b, cb) {
    let result = a + b;
    cb(result);

    return () => console.log(result);
}

// function showResult(result) {
//     console.log(result);
// }

// add(24,  4, showResult);

// OR
// add(6, 7, val => console.log(val));


let resultFunction = add(23, 5, () => {})
resultFunction();