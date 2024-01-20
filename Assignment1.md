# Programming Language Project -- Assignment 1

## About

For a brief description of the project see the [README file](README.md). This first assignment covers some basic information about the chosen langage for this project (JavaScript), the setup required to begin, and the resources I will be starting with to learn the language (there will certainly be more used as learning progresses).


**Programming Language: JavaScript**

### History

JavaScript was created for Netscape 2 by Brendan Eich in 1995. In 1997 JavaScript became the ECMA-262 standard with the release of the first ECMAScript language specification. The version ECMAScript 5 (ES5) was released in 2009; by 2013 it was fully supported by all major browsers. ECMAScript 2023, the 14th edition, is currently the most recently released version (as of writing this in January 2024) [[1]](https://www.w3schools.com/js/js_history.asp). JavaScript conforms to the ECMAScript specification and is essentially a “dialect of the ECMAScript language” [[2]](https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/‌). Mozilla maintains JavaScript’s documentation. 

JavaScript was written to address the desire for a client-side scripting language that would enable web pages to be dynamic (until that point web pages were static). It was also written to be more accessible to non-programmers, giving them the ability to create interactive websites [[3]](https://en.wikipedia.org/wiki/JavaScript#Examples_of_scripted_behavior).


### Primary Uses

JavaScript was initially created as and is still used very widely as a client-side scripting language, however it has also become increasingly popular for server-side/backend use. JavaScript is used in the vast, vast majority of websites and is also used for games, web applications, mobile apps, as well as for back end/server applications.

JavaScript is used to create dynamic pages, responsive user interfaces and interactive features such as animations, real time data display, the updating or changing of content without reloading a page, form validation, use of APIs, responding to and incorporating user input, and more [[4]](https://www.codecademy.com/article/what-is-javascript)[[5]](https://www.computerscience.org/bootcamps/guides/javascript-uses/).


### Resources for Learning

To learn to use JavaScript over the course of the semester I will use a mix of resources. There is, of course, an abundance of information about JavaScript and many tools for learning it on the internet. I am beginning to learn using some online resources like lessons, articles/explainers, documentation, and free tutorials such as those from w3schools, Mozilla/MDN, and freeCodeCamp; these offer more a hands-on approach and direct, accessible explanations.

Books, videos, and mini-courses are resources that will be used to deepen and expand upon what is learned and practiced in tutorials and shorter form materials. The book _Eloquent JavaScript_ is available [for free online](https://eloquentjavascript.net/) and is the first book I will read on the topic. I also have physical copies of a textbook on jQuery and one on JavaScript that are rather dated, however could still be useful for supplementing information from the internet about jQuery as well as concepts and aspects of JavaScript that have not changed since the books’ publication. There are many mini-courses that can be found (and accessed for free) by simply searching “JavaScript” on platforms such as [edX](https://www.edx.org/learn/javascript) and [Udemy](https://www.udemy.com/courses/search/?lang=en&price=price-free&q=javascript&ratings=4.0&sort=relevance&src=ukw), which I plan to explore as well.


## Getting Started

### Installation

**For client-side JavaScript:** every standard browser has a JavaScript engine, so there is no installation needed.

**For server-side JavaScript** a runtime environment is needed; I chose Node.js because it is the most ubiquitous and practical option. It is a [free download](https://nodejs.org/en/download) from Node.js’ site and, once installed, gives you access to the `node` executable program in the command line/terminal. To install Node.js [[6]](https://www.codecademy.com/article/bwa-node-setup):
- On the [download page](https://nodejs.org/en/download) click on the installer for your operating system and the download will begin.
- Once the download is complete, open the installation software and follow the instructions and prompts it gives.
- After the installation is complete open your Terminal/command line.
- Type `node` and then press `return`. This will open an interactive JavaScript console.
- To test it you can type `console.log(“Hello World!”);` and press `return`. Hello World! should print to the command line console.
- To exit the console, press the `control` button and the `C` button at the same time.

Note: Using Node.js generally requires a certain level of knowledge of JavaScript; in terms of use for this course/project, it will likely only become relevant later in the semester, once I have a handle on at least the basics of JavaScript.


### Programming Environment

JavaScript does not come with a recommended programming environment. I chose to use Visual Studio because it is an application that I am familiar with, it is free, and some light Google searching affirmed that Visual Studio as an appropriate choice for use with JavaScript.


### Running Programs

**To run JavaScript using Visual Studio:** With the file open, go to the `Run` menu and select either `Start Debugging` or `Run Without Debugging`. This will open the html document that the JavaScript is associated with in a browser window and run the JavaScript; anything logged to the console will show up in the console of the IDE (or can be accessed via the browser’s developer tools (see below)).

**To run JavaScript from the desktop:** open the html file that the JavaScript code is in or linked to in the browser by simply double clicking on the file. To view the console in the Chrome browser:
- With the project page open in the browser, in the `View` dropdown menu go to the `Developer` sub-menu and select `Developer Tools`.
- At the top of the developer tools panel select the `Console` tab.

**To run JavaScript from the terminal:** (Note: to do this, Node.js must already be installed):
- Open the terminal.
- Use the `cd` command to navigate to the location of the file to run.
- Once you are in the correct directory, type  `node filename.js` (where `filename.js` is the name of the .js file you want to run) and press `return` [[7]](https://www.geeksforgeeks.org/how-do-you-run-javascript-script-through-the-terminal/).


### Writing Comments

To write comments in JavaScript:


For a single line comment use `//` before the comment
```
//this is a comment
```


For a comment of any length, place the comment between `/*` and `*/`
```
/*this is a comment*/
```

## Resource List

A list of some resources to use:

#### General JavaScript Tutorials and Online Information:
-	w3schools: https://www.w3schools.com/js/default.asp
-	Mozilla Developer Network (MDN)—beginning, intermediate, and advanced tutorials and references: https://developer.mozilla.org/en-US/docs/Web/JavaScript
-	freeCodeCamp: https://www.freecodecamp.org/news/full-javascript-course-for-beginners/
-	https://javascript.info/

#### Books:
-	Eloquent JavaScript (free online version): https://eloquentjavascript.net/
-	Head First jQuery by Ryan Benedetti and Ronan Cranley
-	Head First JavaScript Programming by Eric Freeman and Elisabeth Robson

#### Node.js:
-	Node website and introductory information: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
-	Setup instructions: https://www.codecademy.com/article/bwa-node-setup
-	freeCodeCamp handbook: https://www.freecodecamp.org/news/get-started-with-nodejs/
-	w3schools tutorial: https://www.w3schools.com/nodejs/



### References
[1] W3Schools, “JavaScript History,” _www.w3schools.com_. https://www.w3schools.com/js/js_history.asp

[2] freeCodeCamp.org, “What’s the difference between JavaScript and ECMAScript?,” _freeCodeCamp.org_, Oct. 28, 2017. https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/
‌

[3] “JavaScript,” _Wikipedia_, Jan. 19, 2024. https://en.wikipedia.org/wiki/JavaScript#Examples_of_scripted_behavior.

‌
[4] “What is JavaScript?,” _Codecademy_. https://www.codecademy.com/article/what-is-javascript

‌
[5] M. Williams, “What Is JavaScript Used For? | _ComputerScience.org_,” www.computerscience.org, Sep. 19, 2022. https://www.computerscience.org/bootcamps/guides/javascript-uses/

‌
[6] “Setting Up Node,” _Codecademy_. https://www.codecademy.com/article/bwa-node-setup.


‌[7]“How do you run JavaScript script through the Terminal?,” _GeeksforGeeks_, Sep. 06, 2019. https://www.geeksforgeeks.org/how-do-you-run-javascript-script-through-the-terminal/.
‌
‌
