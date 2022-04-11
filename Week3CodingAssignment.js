//Creates the ages array with the specified values and prints the subtraction of the last element with the first element
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length - 1] - ages[0]);

//Adds a new number to the end of the ages array and runs the subtraction of the last element with the first element again
ages.push(103);
console.log(ages[ages.length - 1] - ages[0]);

//Creates a variable for the total of elements in the array and loops through the array to get a total
let totalAge = 0;
for(let i = 0; i < ages.length; i++)
{
    totalAge += ages[i];
}

//Creates and prints out the variable for the average using the total variable calculated above
let averageAge = totalAge / ages.length;
console.log(averageAge);

//Creates the names array and assigns the specified values
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//Creates a variable for the total number of letters for each name and loops through the names array to add the length of each name to the total
let numLetters = 0;

for(let i = 0; i < names.length; i++)
{
    numLetters += names[i].length;
}

//Creates a variable for the average number of letters and calculates the average using the numLetters total calculated above
let averageLetters = numLetters / names.length;
console.log(averageLetters);

//Creates a variable to hold the concatenation of all the names and loops through the names array to add to the variable
let allNames = "";

for(let i = 0; i < names.length; i++)
{
    allNames += (names[i] + " ");
}

console.log(allNames);

/*
    4) How do you access the last element of an array?
    -You can use the length method and subtract it by 1 to find the last index of an array
    -ex) names[names.length-1]

    5) How do you access the first element of an array?
    -You reference the "0" position of an array to get the first element in the array.
    -ex) names[0] will return the first element of the array
*/


/*Creates an array for the length of each name, loops through each index to find the length of each name and puts that length into the index
of the new array*/

let nameLengths = [];

for(let i = 0; i < names.length; i++)
{
    nameLengths[i] = names[i].length;
}
console.log(nameLengths);

//Creates a variable to hold the sum of the lengths and loops through the nameLengths array to add the lengths to the running total

let sumLengths = 0;

for(let i = 0; i < nameLengths.length; i++)
{
    sumLengths += nameLengths[i];
}
console.log(sumLengths);


//Function that takes a message and the amount of iterations as parameters and prints out the message concatenated with itself x number of times
function printMessage(message, iteration)
{
    let finalMessage = "";
    for(let i = 0; i < iteration; i++)
    {
        finalMessage += message;
    }

    console.log(finalMessage);
}

//Prompts user for the message and the amount of times to iterate and runs the printMessage function

let word = prompt("Please enter the word to print out");
let wordIteration = prompt("Please enter the amount of times to print out");

printMessage(word, wordIteration);


//Function that concatenates first and last name with a space separating the 2
function fullName(fname, lname)
{
    return fname + " " + lname;
}

//Prompts user for first name and last name and runs the fullName function

let firstName = prompt("Please enter your first name");
let lastName = prompt("Please enter your last name");
let completeName = fullName(firstName, lastName);

console.log("Your full name is " + completeName);


//Function that calculates the sum of an array and prints out whether the sum is greater than 100 or not
function isGreaterThan100(a)
{
    let sum = a.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    })

    if(sum > 100)
    {
        return true;
    }

    return false;
}

//Create an array of numbers and runs the function to see if the sum of the numbers are greater than 100
let numArray = [25, 50, 27];
console.log("Is the sum greater than 100? " + isGreaterThan100(numArray));


//Function that calculates the average of the numbers in an array
function averageNum(a)
{
    let sum = a.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    })

    return sum / a.length;
}

console.log("The average is " + averageNum(numArray));


//Function that compares the averages of 2 arrays and prints true if the average of the first array is greater than the average of the 2nd array
function compareAverage(a1, a2)
{
    if(averageNum(a1) > averageNum(a2))
    {
        return true;
    }
    return false;
}

//Create a 2nd number array for testing purposes of the compareAverage function
let numArray2 = [25, 50, 30];

console.log("Is the average of numArray greater than the average of numArray2? " + compareAverage(numArray, numArray2));


//Function that returns true if it is hot outside and money is greater than 10.50, otherwise returns false
function willBuyDrink(isHot, money)
{
    if(isHot == true && money > 10.50)
    {
        return true;
    }
    return false;
}


//Prompts user for if the temperature is hot outside and what their current money is and runs the willBuyDrink function using the information
let isHotOutside;
let tempInput = prompt("Is it hot outside? (y/n)");
if(tempInput.toLowerCase() == "y")
{
    isHotOutside = true;
}
else
{
    isHotOutside = false;
}

let moneyInPocket = prompt("Please input your money");

console.log("Will you buy a drink today? " + willBuyDrink(isHotOutside, moneyInPocket));


//Function that calculates the total amount of money given the amount of coins a user has
function countCoins(quarter, dime, nickel, penny)
{
    return (quarter * .25) + (dime * .10) + (nickel * .05) + (penny * .01);
}

let numQuarters = prompt("How many quarters do you have?");
let numDimes = prompt("How many dimes do you have?");
let numNickels = prompt("How many nickels do you have?");
let numPennies = prompt("How many pennies do you have?");
let totalCoins = countCoins(numQuarters, numDimes, numNickels, numPennies)

console.log("The amount you have in coins is " + totalCoins.toFixed(2));