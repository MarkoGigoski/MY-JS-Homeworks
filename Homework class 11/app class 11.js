console.log(`---- First exe ----`);
/*
Declare and initialize a variables of every type that we learned so far. Print each of them in a console or alert()!
*/

let string = "string";
let boolean = true;
let number = 7;
let nul = null;
let undeFined;
let object = {
    grp: "g7",
}
let array = [1,2,3,4,5]

alert(`${string }, ${boolean}, ${number}, ${nul}, ${undefined}, ${object}, ${array}`);

console.log(`---- Second exe ----`);
/*
Read 5 variables as user input and then print each of the variable types in the console.
*/

console.log(typeof (string));
console.log(typeof (boolean));
console.log(typeof (number));
console.log(typeof (nul));
console.log(typeof (undefined));
console.log(typeof(array));

console.log(`---- Third exe ----`);
/*
Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 double the difference as a result.
Make sure you use a function!
Ex. Input: 20 ==> Output: 14
*/

let numberForFunction = 15
function exercise(givenNumber){
    if(givenNumber > 13){
        let res = givenNumber % 13
        return res * 2
    }
    else{
        console.log(`add biger number then 13 u MAPHET!`)
    }
    
}
let res = exercise(numberForFunction);
console.log(res);

console.log(`---- Fourth exe ----`);
/*
Write a JavaScript program that will find out which of two inserted integers is closer to 100. Make sure to alert the user if a negative number is inserted!
Make sure you use a function!
Ex. Input1: 20
Input2: 80
Output: 80 is closer to 100
*/

let inp1 = 20;
let inp2 = 80;

function closerTo100(input1, input2){
    if(input1 < 0 || input2 < 0){
        return alert(`You have a negative number enter a biger number then 0`)
    }
    let resInp1 = 100 - input1;
    let resInp2 = 100 - input2;

    if(resInp1 > resInp2){
        return resInp1
    }
    else{
        return resInp2
    }
}
let res2 = closerTo100(inp1,inp2)
console.log(res2)

console.log(`---- Fifth exe ----`);
/*
Bob's salary is 1000 eur per month. He has expenses that has to cover during the month. He has to pay rent for his apartment 375 eur. He should pay 250 eur for his bills in total. Print on screen what is the amount left that Bob has for the rest of the month, and what is the total amount of his expenses.
*/

let bobSalary = 1000;
let rent = 375;
let bills = 250;

console.log(`Bob's total amount of his expences are ${rent + bills}$, and he has ${bobSalary - rent - bills}$ for the rest of his month`);

console.log(`---- Sixth exe ----`);
/*
One student has 5 exams in the first semester. His/Her grades for all of the exams are 10, 6, 8, 9, 6 respectively. The professor told the students that for passing the first semester they must have average of 8. The student needs to know whether they have passed the semester or not. Alert on screen if the student pass or not!
*/

let studentExamsGrades = [10,6,8,9,6];

function grades(array){
    let res = 0;

    for(i = 0; i < array.length; i++){
        res += array[i]  
    }
    return res / array.length
}
let resGrades = grades(studentExamsGrades);
console.log(resGrades);

console.log(`---- Seven exe ----`);
/*
Make an array of ten elements. Make sure five of them to be: Null, undefined, NaN, “” and false (JavaScript falsy values). Create a function that will work for every array in the world :) and it will remove all the falsy values from the array.
*/

let arrayOfTen = [1,null,3,4,undefined,6,7,NaN,9,false];

function removeFalsy(array){
    let trutyValues = [];
    for(i = 0; i < array.lenght; i++){
        if (array[i] !== "" && array[i] !== false && array[i] !== undefined && array[i] && !Number.isNaN(array[i])){
            trutyValues.push(array[i])
        }
    }
    return trutyValues
}
let truty = removeFalsy(arrayOfTen);
console.log(truty);


console.log(`---- Eight exe ----`);
/*
Write a JavaScript function called storyTeller(), that will take as an input parameters the input fields values from the html!
ex: storyTeller(who, what, when);
In the function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Example: Lancelot was a really strong knight in the middle age!")
*/

let container = document.getElementById("container");
let who = container.firstElementChild;
let what = who.nextSibling;
let when = what.nextSibling;
let storyBtn = container.lastElementChild;

function storyTelling(input1, input2, input3){
    container.innerHTML += `<p> ${input1} was training ${input2} ${input3} </p>`
}

storyBtn.addEventListener("click", function(event){
    event.preventDefault()
    storyTelling(who.value,what.value,when.value)
})

console.log(`---- Nine exe ----`);
/*
Write a JavaScript programm called PhoneBook. You should have three input fields in the html, one for firstName, lastName and phoneNumber. After entering the values into each of them, on clicking on a “Save” button, you should display the newly added contact in a table below the inputs. Make sure the user is entering an appropriate values in the fields!
Bonus: Add column with delete and edit button so that you can edit or delete a contact! Try to save the newly added contact as an object (literal or construcotr function its up to you) and add it to an array!
*/
let inputFirstName = document.getElementById("inputFirstName");
let inputLastName = document.getElementById("inputLastName");
let inputPhoneNumber = document.getElementById("inputPhoneNumber");
let saveBtn = document.getElementById("saveBtn");
let table = document.getElementById("table");

function printNumbers(fName, lName, pNumber){
    table.innerHTML = ''
    table.innerHTML += `
    <table>
    <tr>
    <th>${fName.value}</th>
    <th>${lName.value}</th>
    <th>${pNumber.value}</th>
    <th><button type="button" id="edit"> Edit </button></th>
    <th><button type="button" id="delete"> Delete </button></th>
    </tr>
    </table>`
}

//Iam having trouble with usig the added btns from the function (Edit,Delete), what is the best way to aproach this?

saveBtn.addEventListener("click", function(event){
    if(inputFirstName.value === '' && inputFirstName.value === Number){
        alert("Add a proper First Name")
    }
    if(inputLastName.value === '' && inputFirstName.value === Number){
        alert("Add a proper Last Name")
    }
    if(inputPhoneNumber.value === '' && inputFirstName.value === Number){
        alert("Add a proper phone number")
    }
    event.preventDefault()
    printNumbers(inputFirstName, inputLastName, inputPhoneNumber)
})

console.log(`---- Ten exe ----`);
/*
Make a TODO app for yourself. You should have only one input and “Add” button. After clicking on the Add button, display the newly added task that you need to do in an unordered list. Each new todo should be saved into an array.
Bonus: Add checkbox to each of the tasks in the unordered list, and after checking a task, it should cross trough the text! Try making the ToDo an object that needs to have two properties: Name and isCompleted properties
*/



