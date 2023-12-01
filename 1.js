import fs from 'fs';

const text = fs.readFileSync('./1.txt', 'utf8');
const lines = text.split('\n');

const isNumber = (str) => {
    try {
        const res = new Number(str)
        return !isNaN(res)
    } catch {
        return false
    }
}

const result = lines.reduce((acc, line) => {
    
    const array = line.split('')
    
    const firstNumber = array.find(isNumber)

    const lastNumber = array.reverse().find(isNumber)
    
    return acc += new Number(firstNumber + lastNumber)

}, 0)

console.log(result)