console.log("---------- H O M E W O R K ----------");

console.log(`STUDENT EXERCISE - #1`);

let firstDiv = document.getElementById("first");
console.log(firstDiv);
let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);
let secondParag = allParagraphs[1];
console.log(secondParag);
let secondDiv = secondParag.parentElement;
console.log(secondDiv);
console.log(secondParag.innerText);

let divs = document.getElementsByTagName("div");
console.log(divs);
let lastDiv = divs[2];
console.log(lastDiv);

let h3s = document.getElementsByTagName("h3");
let lastH3 = h3s[0];
console.log(lastH3);
let h1s = document.getElementsByTagName("h1");
let lastH1 = h1s[1];
console.log(lastH1);


let secondDivChildren = secondDiv.children;
console.log(secondDivChildren);
let text = secondDivChildren[1];
console.log(text);
text.innerText += " text";
console.log(text);

lastH1.innerText = "Its already changed";
console.log(lastH1);
lastH3.innerText = "And this is also changed";
console.log(lastH3);

console.log(`STUDENT EXERCISE - #2`);

/*
1.Make function and name it weightInChickens +
2.Take argument of weight in kg(boolian)+
3.The functions should calculate weight in chickens ( 1 chicken = 0.5kg )
4.The argument should be entered through prompt
5.The result should be shown in the HTML of the page
6.The html page needs to have title and result paragraph
*/

let input = parseFloat(prompt(`Enter your weight number`))
                         //input is boolian
function weightInChickens(input){
    let result = input / 2
    return document.write(result);
}
weightInChickens(input)

let resParag = document.getElementById("resParag");

//AND then i saw the solution and understand what i need to do :|
///////////////////////////////////////////////////////////////

function weightInChickensSolution(weight){
    return weight / 0.5;
}

let resultDiv = document.getElementById("result");
let inp = parseInt(prompt("Please enter how much you weight: "));
//input was taken:)

if(!isNaN(inp)){
    resultDiv.innerHTML = `
    <h3> ${inp}KG is ${weightInChickensSolution(inp)} </h3>
    `
}else{
    resultDiv.innerHTML = `
    <h3> Sorry! Wrong input! Refresh the page again! </h3>
    `
}


console.log(`STUDENT EXERCISE - #3`);

/*
1.Change the text of all paragraphs and headers with javascript
2.The html must not be changed
*/

let thirdExerciseFirstHeader = document.getElementById("myTitle");
console.log(thirdExerciseFirstHeader.innerContent = " First header changed");

let thirdExerciseFirstParag = document.getElementsByClassName('paragraph');
console.log(thirdExerciseFirstParag.innerContent = " First p changed");

let thirdExerciseSecondParag = document.getElementsByClassName("second");
console.log(thirdExerciseSecondParag.innerContent = " Second p changed");

let thirdExerciseSecondHeader = document.getElementsByTagName("h3");
console.log(thirdExerciseSecondHeader.innerContent = " Second header changed");


console.log(`STUDENT EXERCISE - #4`);

/*
1.Create an array with numbers
2.Print all numbers from the array in a list element, in a new HTML page
3.Print out the sum of all of the numbers below the list
*/

let arrOfNum = [2, 4, 6, 5, 9];
let ul = document.createElement("ul");

for(let sum  of arrOfNum ){
    let li = document.createElement("li");
    li.innerText = sum;
    ul.appendChild(li);
}

document.body.appendChild(ul);

console.log(`STUDENT EXERCISE - #5`);

//Bonus when i have more time, now 5 diferent classes weekend mix homework :)





