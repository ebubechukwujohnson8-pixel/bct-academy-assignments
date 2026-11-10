// a. Function declaration
function calculateArea(length, width) {
    return length * width;
}

// b. Function to convert Celsius to Fahrenheit
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// c. Arrow function
const isEven = (number) => number % 2 === 0;

// d. Function expression
const greetUser = function(name) {
    return `Hello, ${name}!`;
};

// e. Calling each function

console.log(calculateArea(5, 4));
console.log(calculateArea(10, 3));

console.log(toFahrenheit(0));
console.log(toFahrenheit(100));

console.log(isEven(8));
console.log(isEven(7));

console.log(greetUser("Daniel"));
console.log(greetUser("David"));