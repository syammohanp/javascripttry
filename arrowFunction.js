// function sum(a, b) {
//   return a + b;
// }
// const sum1 = (a, b) => a + b;
// const sum2 = (a, b) => a + b;

// function isPositive(num) {
//   return num >= 0;
// }

// const isPositive2 = num => num >= 0;

// function randomNumber() {
//   return Math.random;
// }
// document.addEventListener('click', () => {
//   console.log('click');
// });

// document.addEventListener('click', () => console.log('click'));

class Person {
    constructor(name) {
        this.name = name;
    }

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow', this.name);
        }, 100);
    }

    printNameFunction() {
        setTimeout(function () {
            console.log('Function', this.name);
        }, 100);
    }
}

let p = new Person('Bob');
p.printNameArrow();
p.printNameFunction();