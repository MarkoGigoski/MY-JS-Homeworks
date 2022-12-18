console.log(`------ HOMEWORK 6 -----`);

console.log(`STUDENT EXERCISE - #1`);
//We did it on class

console.log(`STUDENT EXERCISE - #2`);
/*
1.CHANGE ELEMENT STYLE
2.On a button click, change a paragraph's text color, background color and font size.
*/
let parags = document.getElementsByTagName("p");
console.log(parags);
let paragForChange = parags[0];
console.log(paragForChange);

let btn = document.getElementById("btn");
console.log(btn);

function changeText(input){
    input.style.color = "red";
    input.style.backgroundColor = "blue"
    input.style.fontSize = "50px";
}
btn.addEventListener("click", function(){
    changeText(paragForChange);
})

console.log(`STUDENT EXERCISE - #3`);

/*let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let button = document.getElementById("btn2");*/
/// gess i was wrong

let inputs = document.getElementById("userInputs").children;
let result = document.getElementById("result");
let submitBtn = document.getElementById("submit");

function getUserInfo(inputElements){
    let result = "User: ";
    for (let input of inputElements) {
        result += input.value + " ";
    }
    result += "is registered!"
    return result;
}
submitBtn.addEventListener("click", function(){
    result.innerText = getUserInfo(inputs);
});

//i try on my own i wasnt able to do it:(  and then i even copy pasted the solution and still didnt worked coz js.37, so you tell me why:(
// and yea i still see the solution of the function and the loop, and still dont get it almost nothing when it comes to the iplementation of the code:( i just understand the build up before the function and the eventListener :)

console.log(`STUDENT EXERCISE - #4`);

let inputRows = document.getElementById("rows_id");
let columnRows = document.getElementById("columns_id");
let tableMainDiv = document.getElementById("dynamic_table");

function generateTable(inputRows,columnRows){
    // creates a <table> element and a <tbody> element
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < inputRows; i++){
      // creates a table row
      let row = document.createElement("tr");

      for (let j = 0; j < columnRows; j++){
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        let cell = document.createElement("td");

        let cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    tableMainDiv.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "5");

    tbl.classList.add("tableTag");
  }

  button.addEventListener("click", function(){
    generateTable(inputRows.value,columnRows.value)
});


// button.addEventListener("click", () => generateTable(inputRows.value,columnRows.value));


/*
Zadachava ja sklopiv so 5 youtube videa i 5 forumi :) i mislam deka radi nekoja sitnica ne mi raboti moze ke mi kazeete vie ako zabelezite :)
Inace ja sklopiv i mi e jasno za sto sluzi for loop in for loop ali drugi elementi mi se pak malce zamagleni :)
*/