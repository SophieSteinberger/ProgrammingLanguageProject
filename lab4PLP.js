/*
Sophie Steinberger
Programming Language Project - Lab 4
*/

//1. Write (or try to emulate, if your language doesn’t have them) different kinds of loops: while, do/while, for, foreach
//for loop -> prints to console numbers 0 - 5
for (let i = 0; i <= 5; i++){
    console.log(i);
}
console.log("\n");

//for loop variation -- omitting expressions 1 and 3 -> Will have same output as previous for loop
let x = 0;
for(;x <= 5;){
    console.log(x);
    x++;
}
console.log("\n");

//for in -> iterates over the object's properties printing the property name and property value
const cat = {
    name: "jimmy",
    age: 2,
    color: "orange"
};
for (y in cat){
    console.log("property name: " + y + " - property value: " + cat[y]);
}
console.log("\n");
//for of -> will print numbers 1 - 5
const myArr = [1, 2, 3, 4, 5];
for (z of myArr){
    console.log(z);
}
console.log("\n");
//while -> will print numbers 1 - 5
let a = 1;
while (a <6){
    console.log(a);
    a++;
}
console.log("\n");

//do while -> will also print numbers 1 - 5
let b = 1;
do{
    console.log(b);
    b++;
} while (b < 6);
console.log("\n");
//.forEach() -> will print the number plus 2 for each number in the array
const numsPlusTwo = [1, 2, 3, 4, 5];
function addTwo(num){
    num = num + 2;
    console.log(num);
}
console.log(numsPlusTwo.toString());
numsPlusTwo.forEach(addTwo);
console.log(numsPlusTwo.toString());
console.log("\n");

//2. Write a function that takes in two numbers, multiplies them, and returns the output
//->this function will return 30 for the two given/hard coded values
function multiply(c, d){
    return c * d;
}
let num1 = 5;
let num2 = 6;
let resultNum = multiply(num1, num2);
console.log(num1 + " multiplied by " + num2 + " is " + resultNum);
console.log("\n");

//3. Write a recursive function (one that calculates a factorial is fine) 
//this function with the hard coded value of 5 returns 120
function getFactorial(n){
    if (n == 1 || n == 0) {
        return n;
    } else {
        return n * getFactorial(n-1);
    }
}
console.log(getFactorial(5));
console.log("\n");

//4. Write a function that takes in a string (or your language's equivalent) and splits it into two strings, then returns both strings
function splitStr(st){
    return st.split(" ");
}

let words = "Two words";
console.log("Initial string: " + words);
const wordsArr = splitStr(words);
console.log("Printing string one: " + wordsArr[0]);
console.log("Printing string two: " + wordsArr[1] + "\n");

//5. Call your functions and save the results of the function calls in variables. -> done above after each function declaration

//6. Write a function that tests whether your language is pass-by-reference or pass-by-value.
//->pass-by-value
function useVal(j) {
    j = 5;
    console.log("This is the value of j inside the function: " + j);
}
let j = 1;
console.log("This is the value of j: " + j);
useVal(j);
console.log("This is the value of j after the function: " + j + "\n");

//-> pass-by-reference behavior
function changeArr(arr) {
    arr[0] = 500;
    console.log("This is the array inside the function: " + arr.toString());
}
const arrToChange = [1, 2, 3, 4, 5];
console.log("This is the array when we start: " + arrToChange.toString());
changeArr(arrToChange);
console.log("This is the array after the function: " + arrToChange.toString());







