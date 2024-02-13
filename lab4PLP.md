# Programming Language Project: JavaScript - Week 4
This assignment addresses information regarding loops and functions in JavaScript. The code that accompanies this assignment (examples demonstrating the material covered below) can be found [here](/lab4PLP.js).

## 1. Does your language include multiple types of loops (while, do/while, for, foreach)? If so, what are they and how do they differ from each other?

JavaScript contains multiple types of loops.

### for loop
The `for` loop executes a block of code a number of times.
Its syntax is:
```
for(expression1; expression2; expression3){
    //code to execute
}
```
Expression 1 sets a variable before the loop starts. Multiple variables can be set in expression one as long as they are comma-separated.
Expression 2 is the condition that must be true for the loop to continue and is checked before every execution of the code block.
Expression 3 increments or decrements a variable after each execution of the code block.
An example of a for loop with expressions is:
```
for(let i = 0; i < 5; i++){
    //code to execute
}
```
In the above example the first expression sets the variable `i`, the second statement runs the loop (again) if `i` is less than 5, and the third expression increments the variable `i` by 1 with every iteration of the loop.

All three expressions are optional if their action is managed elsewhere:
- Expression 1 can be omitted (still keep the semicolon (;) when omitting) if the variable's value is set before the loop.
- Expression 2 can be omitted only if there is a `break` statement in the loop. Without a `break` it will be an infinite loop.
- Expression 3 can be omitted if incrementing or decrementing is done within the loop (if it is omitted and not done within the loop it will also result in an infinite loop).

### for/in loop

The for/in loop is used to loop through properties of an object.
Its syntax is:
```
for (key in object){
    //code block to execute
}
```
In each iteration of the loop `key` is a property name that can then be used to access the object's property's value using the syntax `object[key]`.
While a for/in loop _can_ be used to loop through indexes of items in an Array (and access those items), the order of indexes sometimes may not be as expected and it is recommended to use a `for of` loop for this purpose instead.

### for of loop
`for of` loops are used to loop through the values of an iterable (Arrays, strings, maps, node lists, etc.).
Its syntax is:
```
for (let variablName of iterableName){
    //code block to execute
}
``` 
The variable can be declared with `let`, `var`, or `const`.
An example of a `for of` loop to iterate through a string:
```
let word = "Hello";
for (let x of word) {
    console.log(x)
}
```
The above code would print to the console:
```
H
e
l
l
o
```

### while loop
The while loop executes a code block while a specified condition is true.
Syntax:
```
while (condition){
    //code to execute
}
```
When using a `while` loop, the variable controling the loop must be updated/incremented/decremented within the body of the loop, otherwise an infinite loop will occur.
A `while` loop is functionally the same as a `for` loop in which there is only the second expression (and the first and third expressions are omitted).

### do while loop
A `do while` loop is like a `while` loop, except that the code block is executed once before the condition is checked. In other words, the code block will execute once even if the condition is not met.
Syntax:
```
do {
    //code to execute
}
while(condition);
```

### Array.forEach()
While not a loop, for Arrays the `forEach()` function can achieve the same result as a loop in some cases. `forEach()` is called on an Array, takes a function as an arguement (the function name without parentheses), and applies the function to each item in the Array.
Syntax:
```
arrayName.forEach(functionName);
```
An example of this can be found [here](/lab4PLP.js).
Array values can be changed by this function or this function can simply use the Array values without changing them depeding on the function passed to `forEach`.

## 2. What is the syntax for declaring a function in your language?
### Function Declarations
The syntax for declaring a JavaScript function is:
```
function functionName(parameter1, parameter2, parameter3){
    //code to execute
}
```
The `function` keyword is followed by the name of the function (in camelCase), followed by parentheses that can be empty or contain comma-separated parameters, and then curly braces (`{}`) containing the function's code block. To return a value from a function a `return` statement is used (the keyword `return` followed by the value to return):
```
function functionName(parameter1, parameter2, parameter3){
    //code to execute
    return someValue;
}
```
To invoke (call) a function the following syntax is used:
```
functionName();
```
If a function has parameters they are comma-separated and placed inside the parentheses. If a function has a return value that will be used the function invocation should be assigned to a variable.

### Function Expressions
In addition to function declarations JavaScript also has function expressions, in which the `function` keyword is used to define a function within an expression. Function expressions can have names or the can be **anonymous functions** (functions without names). Function expressions can be invoked immediately as they are defined (self-invoking) or can be called using a variable they are assigned to. An anonymous function follows the same syntax as a named function definition except the name is omitted (and thus it cannot be called again unless assigned to a variable because there would be no identifier by which to reference it).
Syntax of an anonymous (unnamed) function expression:
```
const variableName = function () {
    //code to execute
};
```
The above function can then be invoked using the variable it is assigned to (like a named function, except the variable name takes the place of a function name):
```
variableName();
```
While the syntax of a function expression is very similar to a function declaration, function expressions end with a semicolon.

Anonymous functions can also be self-invoking and not assigned to a variable, which means that the function is executed as soon as it is defined instead of being executed in response to a separate invocation/call. A self-invoking function is written by surrounding the the function definition in parentheses and then following the parentheses-enclosed-definition with another set of parentheses and a semicolon:
```
(function (){
    //code to execute
})();
```
Anonymous functions are often used as callback functions, meaning as a function passed to another function as an argument.

When a function expression contains a named function, the name of the named function expression is local (scoped) only to the function's body, meaning it cannot be called using its name outside of itself.

## 3. Are there any rules about where the function has to be placed in your code file so that it can run?
In JavaScript functions must be in scope to be called. Global functions can be called from anywhere in the code, while functions that are within other functions can only be called within their parent function.
Function declarations are **"hoisted"** to the top of their scope, meaning that regardless of where a function is declared, it is functionally moved to the top of its scope and can be invoked/used anywhere in its scope, even when function declaration occurs after/below/later in the code than the function's invocation. Function hoisting only works for function declarations, not function expressions.

## 4. Does your language support recursive functions?
JavaScript does support recursive functions. A function can call itself recursively using the the same syntax as regular function invocation (demonstrated in question 2).

Function expressions with named functions also offer another another equivalent way to make a recursive call: an in-scope variable that refers to the function. This is more easily illustrated by example--for the following function:
```
const varName = function funcName(){
    //code to execute
};
```
The above function could be called recursively (from within the function) by using `varName();` or `funcName();`. The function name of a named function expression is local to (has the scope of) the function's body; outside of the function's body, the function can only be referenced/invoked using the name of the variable to which it is assigned.

[mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

[mdn - function expression](https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function)


## 5. Can functions in your language accept multiple parameters? Can they be of different data types?
JavaScript functions can accept multiple parameters and they can be parameters of any data types. In JavaScript one does not define the data type of a parameter and there is no type checking of arguments or checking of the number of arguments passed to function (meaning that if the wrong type of data or the wrong number of arguments can be passed into the function, and could create unexpected and unintended outcomes). 

JavaScript also allows function parameters to have default values. To set a default value for a parameter, in the function definition the parameter is assigned the default value using the assignment operator, `=`; this can be seen in parameter2 in the example below:
```
function funcName(parameter1, parameter2 = "default value"){
    //code to execute
}
```
If the above function was invoked with only one argument passed, parameter2's value would be "default value".
If too few arguments are passed to a function and there are not default values provided, the parameters which do not receive values will have the value `undefined`.

JavaScript also has what is called the "rest parameter", which is represented by an ellipsis (`...`). The rest parameter allows a function to treat an indefinite number of arguments as an array, meaning that the function can be called with an any number of arguments. The rest parameter must be the last parameter because it collects all the remaining arguments into an array. To use it follow the ellipsis with the name of the final parameter.
Below is an example of how a function using the rest parameter treats the arguments passed:
```
function myFunction(a, b, ...c){
    console.log("This is argument 1: " + a);
    console.log("This is argument 2: " + b);
    console.log("This is the third argument: " + c)
}

myFunction(1, 2, 3, 4);
myFunction(1, 43, 4, 2, 55, 18, 99);
```
The output would be:
```
This is argument 1: 1
This is argument 2: 2
This is the third argument: 3,4

This is argument 1: 1
This is argument 2: 43
This is the third argument: 4,2,55,18,99
```
[geeksforgeeks](https://www.geeksforgeeks.org/javascript-rest-operator/)

## 6. Can functions in your language return multiple values at the same time? How is that implemented? If not, are there ways around that problem? What are they?
JavaScript does not support returning multiple values from a function. If you want to return multiple values from a function, the values can be returned as elements in an array or a properties of an object.
[citation](https://www.javascripttutorial.net/javascript-return-multiple-values/)

## 7. Is your language pass-by reference or value? Check your code against outside sources in case there is anything tricky going on (like in Perl).
JavaScript is pass-by-value (the original value is unchanged), however in JavaScript object references are values, so objects behave like they are passed by reference, meaning that when a function changes an object property it changes the original value outside the function as well.
Passing by value:
```
function changeVal(x){
    x = 5;
    console.log(x);
}

let x = 1;
console.log(x);
changeVal(x);
console.log(x);
```
Returns:
```
1
5
1
```
The output shows that the value of x, while different inside the function, is unchanged outside/after the function.
On the other hand, the code below demonstrates the paass by reference behavoir for objects:
```
function updateProp(cat){
    cat.age++;
    console.log(cat.age)
}

const cat = {
    fName: "bob",
    age: 2
};
console.log(cat.age);
updateProp(cat);
console.log(cat.age);
```
The above function returns:
```
2
3
3
```
The above output demonstrates that after the function has run, the value of the age prperty has been changed in the original object.

[w3schools](https://www.w3schools.com/js/js_function_parameters.asp#:~:text=JavaScript%20arguments%20are%20passed%20by,(reflected)%20outside%20the%20function.)
[geeksforgeeks](https://www.geeksforgeeks.org/pass-by-value-and-pass-by-reference-in-javascript/)

## 8. Are there any other aspects of functions in your language that aren't specifically asked about here, but that are important to know in order to write one? What are they?

### Function Expressions
In addition to function declarations JavaScript also has function expressions, in which the `function` keyword is used to define a function within an expression. Function expressions can have names or the can be **anonymous functions** (functions without names). Function expressions can be invoked immediately as they are defined (self-invoking) or can be called using a variable they are assigned to. An anonymous function follows the same syntax as a named function definition except the name is omitted (and thus it cannot be called again unless assigned to a variable because there would be no identifier by which to reference it).
Syntax of an anonymous (unnamed) function expression:
```
const variableName = function () {
    //code to execute
};
```
The above function can then be invoked using the variable it is assigned to (like a named function, except the variable name takes the place of a function name):
```
variableName();
```
While the syntax of a function expression is very similar to a function declaration, function expressions end with a semicolon.

Anonymous functions can also be self-invoking and not assigned to a variable, which means that the function is executed as soon as it is defined instead of being executed in response to a separate invocation/call. A self-invoking function is written by surrounding the the function definition in parentheses and then following the parentheses-enclosed-definition with another set of parentheses and a semicolon:
```
(function (){
    //code to execute
})();
```
Anonymous functions are often used as callback functions, meaning as a function passed to another function as an argument.

When a function expression contains a named function, the name of the named function expression is local (scoped) only to the function's body, meaning it cannot be called using its name outside of itself.

#### Arrow Function Expressions
Arrow function expressions are a shorthand way to write function expressions. Arrow functions cannot be used as constructors and should not be used as methods. Arrow functions are always anonymous (unnamed) functions but can also be assigned to a variable. In arrow functions the `function` keyword is omitted and parentheses (unless it is a single parameter being passed) are followed by an arrow `=>` and then either a single expression or statements enclosed in curly braces. The syntax is as follows:
```
(param1, param2) => {
    statements
    return value;
};
```
If there are no parameters leave the parentheses empty, just as you would for a regular function definition.

If there is just one parameter that is not a rest parameter AND the function is not assigned to a variable, the parentheses around the single parameter can also be omitted:
```
param1 => {
    statements
    return value;
};
```

If the function has an expression body (it directly returns an expression), meaning it is a single line with the return statement as the whole function body, the curly braces and the `return` keyword can be omitted (the return is implied):
```
() => expressionToReturn;
```

Arrow functions can also be assigned to variables, like standard function expressions, using the assignment operator:
```
const variableName = (parameter) => {
    statements
    return value;
};
```
([mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions))
([w3schools](https://www.w3schools.com/js/js_arrow_function.asp))

### Scope
Variables defined inside of a function cannot be accessed by anything outside of the function (the function is those variables' scope), however functions can access any variables and functions that are defined inside the scope in which the function itself is defined.
For example, when it comes to nested functions (a function defined within another function), the parent (outer) function does _not_ have access to the variables (or other functions) defined within the child (inner) function, however the child has access to variables defined in its parent as well as any variables its parent has access to.
It is important to note that unlike some other languages, in JavaScript a set of curly braces alone is **not** enough to make a variable locally/block scoped--variables would additionally need to be declared using `let` or `const` to create block scoped variables. Variables declared with `var` have function-scope.

[mdn - Function Scope](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

A significant concept when it comes to scope in JavaScript is **closures**. It is a concept I am still working to fully understand. [w3schools](https://www.w3schools.com/js/js_function_closures.asp) provides a helpful example and summarizes saying, "A closure is a function having access" to the parent's scope even after the parent function has closed". [mdn]() elaborates, "a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time," later continuing, "a closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created." [mdn - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures). If a parent function returns a function, the function that was returned will still have access to the variables of its parent, even though the parent function is done running.

Another aspect of JavaScriptfunctions that has to do with scope and closures is nested and multiply-nested functions. They are something I am still working to better understand how to do/use. The basic idea that functions can be declared within other functions. The inner (child) functions contain the scopes of the outer (parent) function that contains them--for example, function A contains function B, B contains function C, etc., so because the inner functions (B and C) form closures, C can access/contains the scope of its parent function B, B can access/contains the scope of its parent function A, and thus C can, through B, access A. ([mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#multiply-nested_functions))
