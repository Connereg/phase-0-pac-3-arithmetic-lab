let sum = 0
let result = 0


function add(a, b) {
    sum = a + b
    return sum
}

function subtract(a, b) {
    result = a - b
    return result
}

function multiply(a, b) {
    result = a * b
    return result
}

function divide(a, b) {
    result = a / b
    return result
}

function increment(n) {
    result = ++n;
    return result
}

function decrement(n) {
    result = --n;
    return result
}

function makeInt(n) {
    result = parseInt(n, 10)
    return result
}

function preserveDecimal(n) {
    result = parseFloat(n)
    return result
}
