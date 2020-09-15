const alphabet = ['A','B','C','D','E','F']
const numbers = [1,2,3,4,5,6,7,8]

const [a,,b,...rest] = alphabet
const newArray = [...alphabet, ...numbers]
const newArrayConcat = alphabet.concat(numbers);

console.log(a, b, rest);
console.log(newArray);
console.log(newArrayConcat);

function sumAndMultiply(a, b){
    return [(a+b), a*b, a/b];
}

const [sum, multiply, division = 'no division'] = sumAndMultiply(2,3);
console.log('sum and multiply', sum, multiply, division);

const personOne = {
    name: 'Syam',
    age: 30,
    address: {
        city: 'Bangalore',
        state: 'Kar'
    }
}

const personTwo = {
    name: 'Ram',
    age: 25,
    address: {
        city: 'Chennai',
        state: 'TN'
    },
    email: 'ram@gmail.com',
    favoriteFood: 'pizza'
}

const {name: firstName, age, favoriteFood= 'rice', address : {state}} = personTwo;
const {name, ...rest1} = personOne;

console.log(name, rest1);
console.log(firstName, age, favoriteFood, state);

const personThree = {...personTwo, ...personOne}
console.log(personThree);

function printUser(user) {
    console.log(user);
    console.log(`Name is ${user.name} and age is ${user.age}`);
}

function printUserSpecific({name, age, favoriteFood='Idli'}) {
    
    console.log(`Name is ${name} and age is ${age} and favfood ${favoriteFood}`);
}

printUser(personOne);
printUserSpecific(personOne);