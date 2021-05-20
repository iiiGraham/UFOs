// javascript function
function addition(a,b) {
    return a + b
};

console.log(addition(4,5));

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

// working with js version of lamdba function =>
doubleAddition = (c,d) => addition(c,d) * 2;

// creates printHello function - on arguments
printHello = () => "Hello there!";

printHello()

// working with for loops
let friends = ["sarah", "greg", "cindy", "jeff"];

// iterate through the names in the list
// for loop = for (variable; number of times to run; what to apply) { return statement or output statement }
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
        console.log(userList[i]);
    }
}

// another for loop
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

// loop through the veggies
for (var i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}