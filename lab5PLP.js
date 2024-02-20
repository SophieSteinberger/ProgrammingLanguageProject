//How to use a regex to match a pattern


// Create an object (a Person object like the one we created in lab is fine)
// Give the object class attributes (aka instance variables)
// Give the object functions

class Person {
    constructor (fn, ln, bD) {
        this._firstName = fn;
        this._lastName = ln;
        this._birthdate = bD;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(n) {
        this._firstName = n;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(l) {
        this._lastName = l;
    }

    get birthdate() {
        return this._birthdate;
    }

    set birthdate(b) {
        if (b.split("").length == 10){ 
            this._birthdate = b;
        }/* else {
            alert("enter birthdate in YYYY-MM-DD format")
            this.birthdate = GET USER INPUT
        }*/
    }

    get fullName() {
        return this._firstName + " " + this._lastName;
    }

    get birthYear() {
        return this._birthdate.slice(0, 4);
    }

    introduceSelf() {
        console.log(`Hi my name is ${this._firstName} ${this.lastName}`);
    }

    get month() {
        if (parseInt(this._birthdate.slice(5, 7)) == 12){
            return "December";
        } else if (parseInt(this._birthdate.slice(5, 7)) == 11) {
            return "November";
        } else if (parseInt(this._birthdate.slice(5, 7)) == 10) {
            return "October";
        } else if (parseInt(this._birthdate.slice(5, 7)) == 9) {
            return "September";
        } else if (parseInt(this._birthdate.slice(5, 7)) == 8) {
            return "August";
        } else if (parseInt(this._birthdate.slice(5, 7)) == 7) {
            return "July";
        } else if (parseInt(this._birthdate.slice(5, 7)) == 6){
            return "June";
        } else if (parseInt(this._birthdate.slice(5, 7)) == 5) {
            return "May";
        } else if (parseInt(this._birthdate.slice(5, 7)) == 4) {
            return "April";
        } else if (parseInt(this._birthdate.slice(5, 7)) == 3) {
            return "March";
        } else if (parseInt(this._birthdate.slice(5, 7)) == 2) {
            return "February";
        } else {
            return "January"
        }
    }

    //FIX
    toString() {
        return `${this._firstName} ${this._lastName} was born on ${this.month} ${this._birthdate.slice(-2)}, ${this.birthYear}`;
    }

}

// Create an object that inherits from the first object (e.g., Student) with some attributes and functions of its own
class Student extends Person {
    constructor(fn, ln, bD, m, g) {
        super(fn, ln, bD);
        this._major = m;
        this._gpa = g;
    }

    get major() {
        return this._major;
    }

    set major(nM) {
        this._major = nM;
    }

    get gpa() {
        return this._gpa;
    }

    set gpa(gPA) {
        this._gpa = gPA;
    }

    get letterGrade () {
        if (this._gpa >  3.67) {
            return ("A");
        } else if (this._gpa > 3.33) {
            return ("A-");
        } else if (this._gpa > 3.0) {
            return ("B+");
        } else if (this._gpa > 2.67) {
            return ("B");
        } else if (this._gpa > 2.33) {
            return ("B-");
        } else if (this._gpa > 2.0) {
            return ("C+");
        } else if (this._gpa > 1.67) {
            return ("C");
        } else if (this._gpa > 1.33) {
            return ("C-");
        } else if (this._gpa > 1.0) {
            return ("D+");
        } else if (this._gpa > 0.67) {
            return ("D");
        } else if (this._gpa > 0.0) {
            return ("D-");
        } else {
            return ("F");
        }
    }

    toString() {
        return super.toString() + `. They major in ${this._major} and their GPA is ${this._gpa}.`;
    }
}


//// Adding the code below to allow importing 
// the functions in other files 
//module.exports = { add }
//https://www.geeksforgeeks.org/import-and-export-in-node-js/
module.exports = { Person, Student };