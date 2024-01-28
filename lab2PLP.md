# Lab 2 - Programming Language Project: JavaScript 

For week 2 of this project the focus is data types and variables. While JavaScript does not use explicit declarations of data type when declaring variables, being aware of the type of the variable being declared is still important for how it can and will be used.
A code example of the data types (the accompanying code to this assignment) can be found [here if you have node.js or other runtime environment](plpLab2.js) or [here if you will be running it through a browser](plpLab2.html).

## 1.	What are the naming requirements for variables in your language? What about naming conventions? Are they enforced by the compiler/interpreter, or are they just standards in the community?
### The enforced naming requirements are:
- Variable names (identifiers) must be unique
- They are case sensitive
- They must begin with a letter, an underscore (_) or the symbol $
- They can contain letters, numbers, underscores, and the $ symbol
- They cannot be reserved keywords

### The conventions that are standards but not enforced:
- Variable names (as well as function names) are written in camelCase
- Though technically allowed, the convention is **not** to begin variable names with a $ symbol because it conflicts with many JavaScript library names (for example, jQuery statements all start with a $)
- An underscore as the first character of an identifier is used to indicate that something is intended to be private (though privacy is not enforced)
- Constants (variables with unchanging values) are written in UPPERCASE
  - If the constant’s name contains multiple words use UPPER_SNAKE_CASE
- Class names should use Pascal case (the first letter of each word is capitalized including the starting letter (ThisIsAnExample))

### Another relevant topic to variable declaration is the keywords used to declare variables:
- `var` – until 2015 var was the only keyword for variable declaration. Once block scope was added to JavaScript in 2015, two more keywords for variable declaration were made available. While the var keyword still works, it seems to be the convention to now use `let` instead whenever possible.
  - Variables declared with var (and not those declared with let or const) are “hoisted” to the top of their function or scope, meaning that they are technically known and available from the beginning of their scope even before the declaration of the variable in code (though if/when used before a value is assigned, the value of the variable will be undefined).
- `let` – variables declared with let have block scope and cannot be redeclared within the same scope (however it can still be reassigned).
- `const` – variables declared with const cannot be redeclared or reassigned; it is used to create variables with unchangeable value.

[https://www.w3schools.com/js/js_conventions.asp](https://www.w3schools.com/js/js_conventions.asp)
[https://medium.com/@kjschelling/a-comprehensive-guide-to-naming-conventions-in-javascript-46a7518e4807](https://medium.com/@kjschelling/a-comprehensive-guide-to-naming-conventions-in-javascript-46a7518e4807)
[https://www.w3schools.com/js/js_let.asp](https://www.w3schools.com/js/js_let.asp)
[https://kesharvani.hashnode.dev/why-using-var-is-a-bad-practice-in-javascript](https://kesharvani.hashnode.dev/why-using-var-is-a-bad-practice-in-javascript)


## 2.	Is your language statically or dynamically typed?
JavaScript is dynamically typed:
- Variables’ data types are determined by the values they hold at runtime (you do not have to specify/declare a variable’s datatype when creating the variable)
- Variables’ data types can change throughout the program when they are assigned different values.

## 3.	Strongly typed or weakly typed?
JavaScript is weakly typed:
- JavaScript recognizes different data types but handles them more loosely than some other languages; variables’ data types are not explicitly specified and can be converted at runtime

## 4.	If you put this line (or something similar) in a program and try to print x, what does it do? If it doesn't compile, why? Is there something you can do to make it compile? x = "5" + 6 
When running such code in JavaScript, x would print as “56”, converting the integer 6 into a string (“6”) and then concatenating the two as two strings. When adding a string and a number the JavaScript interpreter treats the number like a string and concatenates the two values and resulting in a string.
- JavaScript evaluates expressions from left to right, so if there are multiple numbers with arithmetic operators before a + and a string, it will evaluate the numbers as numbers until the string is reached.
  - Example: `2 + 2 + 2 + “Hello”`    would evaluate to:   6Hello

## 5.	Describe the limitations (or lack thereof) of your programming language as they relate to the coding portion of the assignment (adding ints and floats, storing different types in lists, converting between data types). Are there other restrictions or pitfalls that the documentation mentions that you need to be aware of? 

-	Not having to declare data types for variables can be freeing in its convenience but also can cause hard to find errors due to automatic conversions; theses errors can cause the code to fail or, when the code does not fail, the errors can lead to code producing unwanted/ unintended behavior and/or incorrect information. As noted in the answer to number 4, there is automatic conversion to string if the data types of terms in a + operation do not match but one of them is a string.
-	Use of datatypes is very loose in JavaScript and the comparative lack of data types requires a much lower level of specificity on the part of the person writing the code.
-	A concept that I am still working on fully grasping is that in JavaScript all data types that are not of Object type are primitive types. Furthermore, all primitive types other than null and undefined have corresponding wrapper Objects that offer methods for the object; JavaScript automatically does the wrapping of the primitive values in the appropriate wrapper object when a property of the value is to be accessed.
- The data types in JavaScript are:
    - String - textual data
    - Number - integers or floating point numbers
    - Bigint - numbers with more than 15 digits
    - Boolean - true or false
    - Undefined - the value undefined, conceptually indicates the absence of a value. Used when:
        - return statement has no value to return
        - someone tries to access an object property that does not exist 
        - variables not yet assigned a value
        - when methods that involve getting or finding cannot find an element
    - Null - indicates the absence of an object
    - [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) - "Symbol is a built-in object whose constructor returns a symbol primitive" that is guaranteed to be unique
    - Object (non-primitive)

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

## 6.	Are there built-in complex data types that are commonly used in your language? (hint: they’d probably appear fairly early in the documentation if so)
-	In JavaScript the only non-primitive data type is Object.
-	Arrays and Dates are special types of object.

[w3schools - data types](https://www.w3schools.com/js/js_datatypes.asp)
[w3schools - objects](https://www.w3schools.com/js/js_objects.asp)



<!--
Sophie Steinberger
January 28, 2024
Structure and Organization of Programming Language
-->
