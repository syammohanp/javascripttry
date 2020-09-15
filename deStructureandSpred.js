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