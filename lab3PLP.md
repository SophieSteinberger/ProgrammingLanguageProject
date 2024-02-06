# Programming Language Project: JavaScript - Week 3


## 1.	What are the boolean values in your language? (e.g., True and False, true and false, 1, and 0,  etc)

The boolean values in JavaScript are `true` and `false` (both lowercase).

## 2.	What types of conditional statements are available in your language? (if/else, if/then/else,  if/elseif/else). Does your language allow for statements other than “if” (for example, Perl has  an “unless” statement, which does the opposite of “if”!)? What operators are used to act on booleans?

JavaScript uses the conditionals if, else, and else if. The syntax for their use is:

```
if (condition){
    //code block to execute if condition is true
} else if (condition){
    //code block to execute if condition is true
} else {
    //code block to execute if neither/none of the the conditions are true
}
```

The operators that are used to act on Booleans are `&&` for _and_, `||` for _or_, and `!` for _not_


*Note: the logical operators and syntax for if/else if/else are the same in JavaScript and Java (though “java” being in both names does not imply connection).

## 3.	How does your programming language deal with the “dangling else” problem? 

“In JavaScript an else clause is always associated with the closest preceding if statement that does not already have an else clause”. It is also noted that good practice is to use indentation clarify which ifs and elses go together \([codeQL](https://codeql.github.com/codeql-query-help/javascript/js-misleading-indentation-of-dangling-else/)\).

## 4.	If your language supports switch or case statements, do you have to use “break” to get out of them? Can you use “continue” to have all of them evaluated?

JavaScript supports switch statements and cases.
-	The switch expression is evaluated
-	The value of the expression is compared to the case values using strict comparison (the equivalent of using === (the values and types must match))
-	If the expression matches a case, the block of code for that case is executed
-	The break keyword, used in the break; expression is used to break out of a switch block. 
    •	It goes at the end of each case’s code block except for the last one, which does not need it.
    •	If the break is not included, the next case will be executed __even if the value being compared does NOT match the case__
-	Switches can also have a `default` block to run if none of the cases match. Having a default is optional. Default is rather analogous in role to the else of an if/else if/else

The syntax for writing a switch statement is below:

```
    switch (expression){
        case a:
            //code block to execute if a is a match
            break;
        case b:
            //code block to execute if b is a match
            break;
        case c:
            //code block to execute if c is a match
            break;
        default:
            //code block to execute if neither a nor b nor c match
            //no break statement is required because the switch is done after this block anyway
    }
```

\([w3schools](https://www.w3schools.com/js/js_switch.asp)\)

## 5.	Lastly, and perhaps most importantly: it is time to start thinking about what your programming project is going to actually be. In future sessions we will be breaking down your project into individual milestones for weekly check-ins. But for now, just write a short paragraph about what it is you are planning to code in your language of choice. Remember that it should be a substantial program - a game, app, calendar, web site, etc. (I'll try to dig up some examples to share before next class)

For the programming project I would like to use JavaScript to code a web app using Node.js, Express.js and probably React. I am thinking about an app that would help users to track what food items they have and in what quantities (as well as when they expire or were opened), query recipes (either input and stored by user and/or use APIs for other recipe databases) that can be made with what is on hand, or would only require acquiring a minimal number of ingredients, or uses up items that would expire soon, etc., and would update quantities the user has left after making a recipe (for example, inputting that I made a half batch of the Tollhouse chocolate chip cookie recipe, would update that I now have 1 cup less chocolate chips in my pantry, 8Tbs less butter, etc.).

[codecademy - express.js](https://www.codecademy.com/article/what-is-express-js)

[freecodecamp -  creating a react app with node backend](https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/)

[geeksforgeeks - node.js with react.js](https://www.geeksforgeeks.org/how-to-connect-node-js-with-react-js/)


## Useful Information for Implementing Conditionals - Getting User Input

In this week's Structure and Organization of Programming Languages course content we had a lab about applying the same ideas covered in this assignment above but in Java (not JavaScript). An action common and relevant to the use of conditionals is getting user input; the user input determines which code blocks are (and are not) executed in subsequent if/else or switch statements. One way JavaScript can receive user input via a `prompt`, however a prompt is a pop up and is a blocking event, making prompts not ideal for most user input scenarios. JavaScript can also take user input from a wide range of different user actions and events (clicking, typing, loading, etc.), but to narrow the scope of user input for this context of something analagous to the Java lab from this week's class, I am referring to written (typed) user input; this form of user input generally comes from HTML input elements (or text area elements) on a form that, when submitted, makes those values input by the user available to the program. [Here](/userInputExample.html) you will find my example code for a basic implementation of taking input from an HTML form and then using it in an if/else in JavaScript code. The following three links are resources I used and found helpful in learning how to do what is described above and shown in the example code: 



[freecodecamp - how to submit a form](https://www.freecodecamp.org/news/how-to-submit-a-form-with-javascript/)
[medium - using preventDefault()](https://medium.com/@stheodorejohn/event-preventdefault-explained-controlling-default-browser-behavior-with-ease-b578d883aefe)

[mdn - sending forms](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript)

