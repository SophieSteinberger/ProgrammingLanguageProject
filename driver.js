// Importing the func.js module 
// The ./ says that the func module 
// is in the same directory as  
// the main.js file 
//const f = require('./func'); 
//https://www.geeksforgeeks.org/import-and-export-in-node-js/

const f = require('./lab5PLP');


// Test how to instantiate both types of objects, call their functions...
const p = new f.Person("Bob", "Smith", "1990-02-01");
const s  = new f.Student("Jim", "Jam", "1992-06-01", "Math", 4.0);
console.log(p.firstName); //Bob
console.log(p.lastName); //Smith
console.log(p.fullName); // Bob Smith
console.log(p.birthdate); //1990-02-01
console.log(p.birthYear);//1990
p.introduceSelf(); //Hi my name is Bob Smith
console.log(p.toString()); //  Bob Smith was born on February 01, 1990
console.log("\n\n"); 

//and modify their variables.
p.firstName = "Jane";
p.lastName = "Doe";
p.birthdate = "1991-06-01";

console.log(p.firstName); //Jane
console.log(p.lastName); //Doe
console.log(p.fullName); // Jane Doe
console.log(p.birthdate); //1991-06-01
console.log(p.birthYear);//1991
p.introduceSelf(); //Hi my name is Jane Doe
console.log(p.toString()); // Jane Doe was born on June 01, 1991
console.log("\n\n"); 


console.log(s.firstName); //Jim
console.log(s.lastName); //Jam
console.log(s.fullName); // jim Jam
console.log(s.birthdate); //1992-06-01
console.log(s.birthYear);//1992
s.introduceSelf(); //Hi my name is Jim Jam
console.log(s.major); // Math
console.log(s.gpa); //4.0
console.log(s.letterGrade); //A
console.log(s.toString()); // Jim Jam was born on June 01, 1992
console.log("\n\n"); 

//and modify their variables.
s.firstName = "Sarah";
s.lastName = "Smith";
s.birthdate = "1993-05-31";
s.major = "Computer Science";
s.gpa = 2.3;

console.log(s.firstName); //Sarah
console.log(s.lastName); //Smith
console.log(s.fullName); // Sarah Smith
console.log(s.birthdate); //1993-05-31
console.log(s.birthYear);//1993
s.introduceSelf(); //Hi my name is Sarah Smith
console.log(s.major); // Computer Science
console.log(s.gpa); //2.3
console.log(s.letterGrade); // C+
console.log(s.toString()); // Sarah Smith was born on May 31, 1992