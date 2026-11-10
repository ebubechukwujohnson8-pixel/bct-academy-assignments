
function makeHandle(name, prefix = "@") {
    return prefix + name.toLowerCase().replaceAll(" ", "_");
}

function describeTrip(destination, days = 3, budget = 500) {
    return `${days} days in ${destination} with a budget of ${budget}`;
}


function sum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

function average(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    const total = numbers.reduce((sum, number) => sum + number, 0);
    return total / numbers.length;
}



console.log(makeHandle("Ada Lovalace"));
console.log(makeHandle("Ada", "#"));

console.log(describeTrip("Cairo"));
console.log(describeTrip("London", 5, 1000));

console.log(sum(1, 2, 3));
console.log(sum());

console.log(average(2, 4, 6));



function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet());          
console.log(greet(undefined)); 
console.log(greet(null));      
