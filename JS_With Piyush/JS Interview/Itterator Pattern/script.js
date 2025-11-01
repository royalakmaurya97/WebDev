// What is Iterator pattern?
// Generator fun?
// Yield Keyword?


function makeIteraator(start = 0, end = Infinity, step = 1){

    nextStart = start;
    iterationCount = 0;

    return {
        next() {
            let result;
            if (iterationCount < end) {
                result = {value: nextStart, done: false}
                nextStart += step;
                iterationCount++;
                return result;
            }

            return {value: iterationCount, done: true};
        }
    }
}

// const myIterator = makeIteraator(1, 10, 1);
// let result = myIterator.next();

// while(!result.done) {
//     console.log(result.value);
//     result = myIterator.next()
// }


// function* count() {
//     yield 2;
//     yield 4;
//     yield 6;
//     yield 8;
//     yield 10;
// }

// const even = count();
// for(const v of even) {
//     console.log(v);
// }


function* makeIteraatorNew(start, end, stepSize = 1) {
    for(let i=start;  i<=end; i+= stepSize) {
        yield i;
    }
}

const one = makeIteraatorNew(1,20,1);
let btn = document.getElementById("next-btn");

// for(const val of one) {
//     console.log(val);
// }


btn.addEventListener("click", () => {
    btn.innerText = one.next().value;
});