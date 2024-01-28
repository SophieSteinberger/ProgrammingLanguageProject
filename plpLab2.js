/*
Programming Language Project
Lab 2
Sophie Steinberger

Write a piece of code that creates variable of each of these common data types (where possible) and follows the naming conventions:
• int
• string
• floating-point number
• boolean
• array/list
• dictionary

*/

//string
let msg1 = "This text is a string";
console.log(msg1 + "<--that text is of the data type " + typeof msg1 + "\n");

//int and floating point number
let numInt = 5;
let numDouble = 2.2;
console.log("Even though " + numInt + " is an integer and " + numDouble + " would be a double in other languages, in JavaScript "
+ numInt + " is of type " + typeof numInt + " and " + numDouble + " is also of type " + typeof numInt + "\n");

//Bigint
//Bigint type variables can be created by calling BigInt() or appending an "n" to the end of an integer
let veryBigNum1 = 123451234512345678n;
let veryBigNum2 = BigInt(1234567891234567890);
console.log(veryBigNum1 + " and " + veryBigNum2 + " are both of the data type " + typeof veryBigNum1 + "\n");



//boolean
let tBool = true;
let fBool = false;
console.log(tBool + " and " + fBool + " are both of the " + typeof tBool + " type\n");

//array and undefined

let myArr = ["cat", 3, true];
console.log("The array " + myArr + " is a type of " +  typeof myArr);
console.log("The first item in the array is a " + typeof myArr[0] + " with the value " + myArr[0]);
console.log("The second item in the array is a " + typeof myArr[1] + " with the value " + myArr[1]);
console.log("The third item in the array is a " + typeof myArr[2] + " with the value " + myArr[2]);
myArr.push(["hi", "bye"]);
console.log("Another item was just added to the array--the added element is an array with the values " + myArr[3]);
console.log("Now the array looks like this: " +  myArr + "\n");
console.log("When trying access an index that does not have an element the value returned will be " + myArr[5] + 
" and its data type will also be " + typeof myArr[5] + "\n");

//null
//following example (lines 55-60) from https://www.geeksforgeeks.org/null-in-javascript/.
//because I was unable to think of an exaple to use due to where we are in this project and due to the way typeof works with null (line 62)
const var1 = null;
if (var1) {
    console.log('var1 is not null');
} else {
    console.log('var1 is null');
}
let nothingHere = null;
console.log("the value of the variable is " + nothingHere + " and yet, an odd quirk of JavaScript is that typeof returns object as its data type like this: " + typeof nothingHere + "\n");


//object
const cat = {
    name:"Jim",
    age:2.5,
    color:"orange"
};
console.log("JavaScript does not have dictionaries, but Objects are written like dictionaries in python, usinging name:value pairs. Objects are the only non-primative data type");
console.log("Property values can be accessed can be accessed through the object's property name. When I access the cat object's color I find that the cat object's color is " + cat.color);
console.log("The whole cat object looks like:");
console.log(cat);


let testStrNum = "hello" + 20;
let testStrBool = "hello" + true;
let testStrArr = "hello" + myArr;
let testNumBool = 5 + true;
let testNumArr = 3 + myArr;
let testNumObj = 2 + cat;

console.log("\nAdding a string and a number results in the type " + typeof testStrNum + " (" + testStrNum + ")");
console.log("Adding a string and a boolean results in the type " + typeof testStrBool + " (" + testStrBool + ")");
console.log("Adding a string and an array results in the type " + typeof testStrArr + " (" + testStrArr + ")");
console.log("Adding a number and a boolean results in the type " + typeof testNumBool + " (5 + true = " + testNumBool + ")");
console.log("Adding a number and an array results in the type " + typeof testNumArr + " (" + testNumArr + ")");
console.log("Adding a number and an object results in the type " + typeof testNumObj + 
" however the resulting string does not print out the object as when it is printed alone: " + testNumObj);
console.log(cat);

