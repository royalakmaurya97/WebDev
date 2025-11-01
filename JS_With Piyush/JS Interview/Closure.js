// function main () {
//     let name = "ALOK KUMAR"
//     function sayMyName() {
//         console.log(name);
//     }

//     sayMyName();
// }

// main()







// function main (name) {
//     function sayMyName() {
//         console.log(name);
//     }

//     return sayMyName;
// }

// let fn = main("ALok Maurya");

// console.log(fn);
// fn()
// fn()


// function adder (num) {

//     function add(b) {
//         console.log(num + b);
//     }

//     return add;
// }

// const addTo5 = adder(5);
// const addTo10 = adder(10);

// addTo5(6);
// addTo5(6);
// addTo10(61);
// addTo10(37);


const myName = document.getElementById("my-name");
const btn = document.getElementById("my-btn")

// function makeTextSizer(size) {
//     function changeSize() {
//         myName.style.fontSize = `${size}px`;
//     }

//     return changeSize;
// }

// const size12 = makeTextSizer(12);
// const size20 = makeTextSizer(20);
// const size52 = makeTextSizer(52);
// const size5 = makeTextSizer(5);

// btn.addEventListener("click", size52);




function makeCounter() {
    let count = 1;

    function increment() {
        console.log(count++);
    }

    return increment;
}

const counter1 = makeCounter()

counter1()
counter1()
counter1()
counter1()