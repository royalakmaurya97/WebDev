// Arrow Functions

// syntax

// const sayHello = () => {
//     console.log('Hello');
// }

// sayHello();


// const add1 = (a, b) => {
//     return a + b;
// }
// console.log(add1(4,76))


// const add2 = (a, b) => a + b;       // One Liner
// console.log(add2(75,56));


// 2. Argument

// const add = (...nums) => {
//     ans = 0;
//     for(let i=0; i<nums.length; i++)
//     ans += nums[i];

//     return ans;
// }

// let result = add(5,6,7,8,94,34);
// console.log('Total sum is:', result)




// 3. Hoisting -> In a normal func is allow Hoisting but Arrow func is not allowing Hoisting

// sayHey()
// function sayHey() {
//     console.log('Heyy there');
// }


// sayHey1()
// const sayHey1 = () => {
//     console.log('Heyy there');
// }



// 4. This Keyword -> (normal this func is support local func and Arrow func support global windows value);

// const obj = {
//     value: 20,
//     myFunction: function() {
//         console.log('Value is ' + this.value);
//     },
// }

// obj.myFunction()



const obj1 = {      // There is getting -> Value is undefined
    value: 20,
    myFunction1: () => {
        console.log('Value is ' + this.value);
    },
}

obj1.myFunction1()