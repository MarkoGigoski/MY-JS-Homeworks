console.log(`-----HOMEWORK-----`);

console.log(`STUDENT EXERCISE - #1`)
//We did this on class

console.log(`STUDENT EXERCISE - #2`)
//Celsius to Fahrenheit
function celsiusToFahrenheit(celsius){
   let celsiusTemp = celsius;
   let celsiusToFahrenheit = celsiusTemp * 1.8 + 32;
   console.log(celsiusToFahrenheit);
}
celsiusToFahrenheit(1);
celsiusToFahrenheit(20);
celsiusToFahrenheit(40);

//Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit){
    let fahrenheitTemp = fahrenheit;
    let fahrenheitTocelsius = (5/9) * (fahrenheit - 32);
    console.log(fahrenheitTocelsius);
}
fahrenheitToCelsius(1);
fahrenheitToCelsius(60);
fahrenheitToCelsius(100);

function farToCel(celsius){
    let result = celsius * 1.8 + 32;
    return result;
}

function celToFar(fahrenheit){
    let result = (5/9) * (fahrenheit - 32);
    return result;
}


console.log("STUDENT EXERCISE - #3");
/*
  1. Create a function called ageCalculator.
  2. Ask the user through prompt for his birth year.
  3. Find out how can we find the current year through JS.
  4. Calculate the user years by = current year - year of birth. 
  5. Print to the user his years.
  6. BONUS: Check if the user clicked cancel.
  7. BONUS: Check if the year is valid and not a future year.
*/

function ageCalculator(){

    let userYearOfBirthInput = prompt("What year are you born in?");
    
    if (userYearOfBirthInput === null || userYearOfBirthInput === ""){
      return false
    }
  
    let date = new Date();
    let currentYear = date.getFullYear();
  
    if (Number(userYearOfBirthInput) > currentYear) {
      return false
    }
    
    let userYears = currentYear - Number(userYearOfBirthInput);
    return userYears
  
  }

let usersYears = ageCalculator();
console.log(usersYears);

console.log("STUDENT EXERCISE - #4");

/*
1.Write a JavaScript function which accepts a parameter and returns its type and prints it in the console
- functionType()
- accepts any kind of the types from parameters
- after acsepting the argument , cofigurate what type it is
- print the type in console
2. Try to call the functions 5 times for 5 different types:
- Object
- Boolean
- Number
- String
- Undefined /
*/

let objet = [`marko`, `gigoski`, `30`, `500`];
let string = "String";
let boolean = true;
let number = 100;
let undefined1;

function type(type){
    let theType = typeof type;
    if(theType === "string"){
        console.log(`Your ${string} argument is String TYPE`);
    }
    else if(theType === "object"){
        console.log(`Your ${objet} argument is Object TYPE`);
    }
    else if(theType === "boolean"){
        console.log(`Your ${boolean} argument is Boolean TYPE `);
    }
    else if(theType === "number"){
        console.log(`Your ${number} argument is Number TYPE `);
    }
    else if(theType === "undefined"){
        console.log(`Your ${undefined1} argument is Undefind TYPE `);
    }
    else{
        theType = "null"
    }
    return theType;
}
// I tried with swich at first it didnt work, i was messing it somewhere

console.log(type(objet));
console.log(type(string));
console.log(type(boolean));
console.log(type(number));
console.log(type(undefined1));

console.log("STUDENT EXERCISE - #5");

/*
1.Write a JavaScript function that will return:
- Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
2. Bonus: Make the same function work for converting dog to human years as well.
3. Call the function in console to see answer.
*/

//human to dog years
function dogsAgeConvertionFromHumanYears(input){
    return input * 7;
}
console.log(dogsAgeConvertionFromHumanYears(10));

//dog to human years
function humanAgeConvertionFromDogYears(input){
    return input / 7;
}
console.log(humanAgeConvertionFromDogYears(70));

//is this what is asked or i made it this basic coz i didnt get it?:)

console.log("STUDENT EXERCISE - #6");

/*
1. Write a javascript function for an ATM.
2. The ATM should give cash.
3. Should return "Not enough money" if you request more money.
4. Should return the ammount withdrawn and money left on the account if you have enough, so we have to say on promt probubly how much we have.
5. Note: Hardcode your account money in the program /////IAM NOT SURE WHAT THIS MEANS
6. BONUS: Make it work with prompt()
*/

function ATM(){
    let moneyWithdrawn = parseFloat(prompt(`You have 1000$ on your Bank acc. How much would you like to withdraw?`));
    let moneyAmount = 1000;
             /////I didnt remember the chek for cancel, so instead i add null, for nothing hahaha:)
    if(moneyWithdrawn === null || moneyWithdrawn > 1000){
        return alert("Not enough money");
    }

    let result = moneyAmount - moneyWithdrawn;
    return (`Here you go the amount you have withdrawn is: ${result}$, and on your bank there is ${moneyAmount - moneyWithdrawn}$ left. Have a good day you MAPHET `)
}
let cashWithdrawn = ATM();
console.log(cashWithdrawn);




