function add(a, b) {
    return a + b;
}

function square(val) {
    return val * val;
}

function multiply(a, b) {
    return a * b;
}


// function addTwoAndSquare(a, b) {
//     return square(add(a, b));
// }

// console.log(addTwoAndSquare(7,3));



// function composeTwoFunction(fn1, fn2) {
//     return function(a, b) {
//         return fn2(fn1(a, b));
//     }
// }
// const task = composeTwoFunction(multiply, square);
// console.log(task(3,6));


// ES6 (model js code)
// const c2f = (fn1, fn2) => (a, b) => fn2(fn1(a, b));
// const task1 = c2f(multiply, square);
// console.log(task1(3,6));








// Unlimited Argument

function compose(...fns) {
    return function(...value) {
        return fns.reduceRight((a,b) => Array.isArray(a) ? b(...a) : b(a), value);
    };
}

const composeAll = (...fns) => (...val) => fns.reduceRight((a,b) => Array.isArray(a) ? b(...a) : b(a), val);

const task1 = composeAll(square, multiply, function(val) {return val + 1});
console.log(task1(3,2));

