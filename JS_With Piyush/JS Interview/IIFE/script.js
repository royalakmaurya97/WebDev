// IIFE - Immediately Invoed Function Expression

// (function add(a, b) {
//     console.log(a + b);
// }) (2,4);


// (function say() {
//     console.log("Hey");
// })();

// (() => console.log("I am Ed6"))();

// const val = (() => 100)();
// console.log(val);



// const data = (async () => await fetch())();



const atm = (function (initialBalance) {
    let balance = initialBalance;       // Balance is Private
    function withdraw(amt) {        //Publicaly expose
        if(amt > balance) {
            return "Are you kidding?";
        }
        else {
            balance -= amt;
            return balance;
        }
    }
    return {withdraw};
});

const alok = atm(1000);
console.log(alok.withdraw(200));
console.log(alok.withdraw(200));
console.log(alok.withdraw(200));
console.log(alok.withdraw(500));