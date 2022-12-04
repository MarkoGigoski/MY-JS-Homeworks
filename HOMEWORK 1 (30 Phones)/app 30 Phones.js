console.log("-----HOMEWORK 1 JS-----")
console.log("Write a JavaScript program that will calculate the price of 30 Phones,")
console.log("where the price of one phone is $119.95 and the tax rate is 5%.")

/*1. I need to calculater the price of 30 phones
2.The price of the phone is $119.95
3. And the tax rate is 5% Modulus */

let subtotal = 119.95;
console.log("Subtotal = $",119.95);
let taxRate = subtotal % 5;
console.log("Taxrate = Subtotal % 5 = $",subtotal % 5);
let total = (subtotal + taxRate) * 30;
console.log("Total = (subtotal + taxRate) * 30");
console.log("The price of 30 Phones is: $",total);

console.log("-----EXAMPLE 2 if it is tax rate in percentage-----")
/*And if (%) is a percentaged is a bit diferent */
let subtotal2 = 119.95;
console.log("subtotal2 = $",119.95);
let taxRate2 = 5 / 100 * 119.95;
console.log("Taxrate = 5 / 100 * 119.95 = $",taxRate2);
let total2 = (subtotal2 + taxRate2) * 30;
console.log("Total = (subtotal + taxRate) * 30");
console.log("The price of 30 Phones is: $",total2);
console.log("Fin")

//Is this the actual homework? :)))


