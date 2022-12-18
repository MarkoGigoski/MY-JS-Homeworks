console.log(`----- Homework class 4, Arrays & Loops ----- `);

console.log(`EXERCISE 1`);

/*
1.Write a function named findNumber
2.The funcstion needs to have 2arguments :
-Number
-Array
3.Find out how many times the number is contained in the array with numbers
4. Return the output to be displayed on screen
5.Call the fuction 3 times with diferent arrays
*/

function findNumber(arrayArgument, arrayLenghtArgument, numberArgument){
    let counter = 0;

    for(let i = 0; i < arrayLenghtArgument; i++){
        if(numberArgument === arrayArgument[i]){
            counter++;
        }
    }
    return counter;
    
};

let arrayOfNumbers = [5, 20, 10, 5, 60, 100, 5];
let number = 5;
let arrayLenght = arrayOfNumbers.length;

findNumber(arrayOfNumbers, arrayLenght, number);
// I got STUCK then i saw solution, i did 3 arguments coz i didnt see how with just 2, and ofc then :
// i didnt want to do it on my own again coz at the time i started it,and  did it after i saw the solution and now finishing it after 10days+

//Solution

function numberCount(number, array){
    let occurences = 0;
    for(let i2 = 0; i2 < array.length; i2++){
        if(array[i2] === number){
            occurences++;
        }

    }
    return occurences;
}
console.log(`There are ${numberCount(number, arrayOfNumbers)} occurences of ${number} in the array`);

console.log(`EXERCISE 2`);

/*
1.Make a function with a name findNumber.
2.Have 2 argument
- Array
- Type
3.Provide an array of numbers and string odd / even.
4.If the type is even, find all the even numbers and return them as a result
4.1 I need to make loop to run the numbers for filtering them
4.2 i need to add IF statment to filter odd, and if else filter for even
5. If the type is odd, find all the odd numbers and return them as a result.
*/

let array1 = [1,2,3,4,5,6];

function findNumber(arrayX, type){

    for(let i = 0; i < arrayX.length; i++){
        if(arrayX[i] % 2 === 0){
            console.log(`Print ${type} `, arrayX[i] + "");
        }
        else if(arrayX[i] % 2 !== 0){
            console.log(arrayX[i] + "");
        }
    }
    return arrayX, type;
}

//Again i had to see the solution i got stuck on my own:(

function findOddEven(array, type){
    let result = [];
    if(type === "even"){
        for(let num of array){
            if(num % 2 ===0){
                result.push(num);
            }
        }
    }
    else if(type === "odd"){
        for(let num of array){
            if(num % 2 !== 0){
                result.push.apply(num);
            }
        }
    }
}
let ending = findNumber(array1, `even`);
// how to make a FOR loop without iterator or condition, only the if statement to have condition and no iterator in entier function and still filter its not that clear to me.
// And the (num) part is confusing me alot


console.log(`EXERCISE 3`);
/*
1. Creat a function called tellStory
2. The function should accept an array of 3 STRINGS as an argument;
- `Name`
- `Mood`
- `Activity`
3. The function needs to return a combined story from the arguments:BIG STRING
-
4. The output needs to be printed in consol.log() or alert()
*/

let story = [`Marko`, `exited`, `programing`];
function tellStory(array){
    console.log(`${array[0]} is feeling ${array[1]} when he is ${array[2]} exercises like this that dont suck the life out of him:)`);
}
tellStory(story);

console.log(`EXERCISE 4`);
/*
1.Creat a function that will take an array of 5 numbers as an argument and return their sum +.
2. Print it in the console or in alert.
**BONUS**
1. Write another function called validateNumber().
2. The function need to chek if every number is valid, and call for every number it for every.
3. And if one of the numbers of the arra is invalid show an error message
*/

let arrayOf5Numbers = [1,10,20,100,400]

function arrayForSum(array){
    let sum = 0
    for(i = 0; i < array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}
let endResult = arrayForSum(arrayOf5Numbers);
console.log(endResult);

//BoNUS after iam up with speed on homeworks:)

console.log(`EXERCISE 5`);// NOT DONE
/*
1.Make a function
2.From array of strings, we need to make one big string no mater the .lengt of the array.
- some how loop them in order to concate them one after the other
3.And then return it
*/

let arrayOfStrings = [`Hello`, `there`, `students`, `of`, `SEDC`, `!`];
function returnBigString(array){

    
   
}

//again every example for concat that i know and remember, and find online is not for inside of function or loop, and index from class didnt help for this one:(

console.log(`EXERCISE 6`);

/*
Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.
*/

for (i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`The iterator ${i} is even \n `)
    }
    else {
        console.log('')
    }
}

console.log(`EXERCISE 7`); //NOT DONE

/*
Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers

1.iterate and find max
2.iterate and find min
3.sum bouth of them and print it 
*/

arr = [3, 5, 6, 8, 11];

function sumOfMaxMin(array){
    let max = array[0];
    let min = array[0];

    for(i = 0; i < array.length; i++){

        if(array[i] > max){
            consol.log(`Max is: `, max = array[i]);
        }

        if(array[i] < min){
            consol.log(`Max is: `, min = array[i]);
        }
        return consol.log(`Sum: `, max + min);
    }
}
sumOfMaxMin(arr);

//OKEJ i tryed so MUCH FOR THIS AND NOTHING WORKED!!!!!!! and i left it with my last example :((((


console.log(`EXERCISE 8`); //NOT DONE

/*
1.Wrtite a JS function fullName that will axepts parameters of 2 arrays.
2.Needs 2 parameters: firstName lastName.
3.It needs to creat one single array with combined first name and last name = full name.
4.And every name should have a numeric value before it.
*/

firstName = [`Marko`, `Bob`];
lastName = [`Gigoski`, `Bobski`];

function fullName(arr1, arr2){
    let arr3 = [];
    for(i = 0; 0 < arr1.length && arr2.length; i++){
        arr3 = arr1[i] + arr2[i];
    }
}
let res7 = fullName(firstName, lastName);
consol.log(res7);

//This one i realy dont know how to even aproach it, i watched on youtube some stuff read on forums, but every single example is not for loop or function way easier:(( and probubly iam way offf:((






