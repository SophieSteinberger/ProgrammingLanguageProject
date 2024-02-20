# Programming Langauage Project: JavaScript - Week 5
Examples of objects, class, and inheritance can be found [here](/lab5PLP.js) and the driver for it can be found here [here](/driver.js).

## 1.	Does your language support objects or something similar (e.g., structs)? Are there naming conventions for objects, instance variables, or functions that people writing in your language should be aware of?
Yes, JavaScript supports objects. In JavaScript everything that is not a primitive data type is an object.
Property (field) names/identifiers (before colons) can be a:
-	name (containing letters and/or numbers and written without quotes)
-	number
-	any string literal
    o	however you cannot use dot notation (can only use bracket notation) to refer to those strings that are not valid JavaScript identifiers (such as strings with spaces or starting with numbers) ([mdn – Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)). Property names can also be computed expressions wrapped in square brackets `[]`.

There is a strong convention that object constructor functions start with a capital letter. To create an instance of the object the keyword `new` must be used in front of the call to the constructor function. Constructor function syntax:
```
function ObjName(prop1, prop2, prop3) {
    this.property1 = prop1;
    this.property2 = prop2;
    this.thirdProp = prop3;
}
const myObj = new ObjName(“val1”, 234, {abc: “def”, 2: “g”});

```
The above is not the only way to define a type of object—as of their introduction in ECMAScript 2015, there is also a `class` syntax in which there is a class declaration, and inside that class declaration there is a `constructor` function for creating objects of that class followed by other methods that belong to the class and can be used by objects of that class.
```
class ClassName {
    constructor (param1, param2) {
        this.firstField = param1;
        this.secondField = param2;
    }
    //define other class functions here
} 
```

When using `get` and `set` keywords to create getter and setter methods (discussed further in question 5) it is common practice to begin the name of the property with the value to be returned or changed with an underscore (`_`), and then use that same name but without the underscore for the getter and setter methods. The getter and setter can have the same name; the get never has any parameters and the set always does. An example of this naming and the relevant syntax is under question 5 ([w3schools](https://www.w3schools.com/js/tryit.asp?filename=tryjs_classes_getters2#:~:text=Class%20Getter%2FSetter-,Using%20an%20underscore%20character%20is%20common%20practice%20when%20using%20getters,same%20as%20the%20property%20name.)).

## 2.	Does your language have standard methods for functions that serve a similar purpose across all objects? For example, toString() in Java and __str__ in Python allow information about the objects to be printed. Are there similar functions in your language? 
JavaScript has a `toString()` method. It is a method of Object instances; it is inherited from Object by any object that inherits from Object. `toString` can be overridden in custom objects. If it is not overridden it will return `[object type]` where `type` refers to the object type.
To override the inherited `toString()` redefine it for the object’s prototype through assignment using a function expression in the following syntax:
```
ObjectTypeName.prototype.toString = function ObjectTypeToString() {
const toReturn =  “some sort of string using object property values ” + this.propertyName + “ ” + this.otherProperty;
return toReturn;
}
```
([mdn]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString))
([geeksforgeeks]( https://www.geeksforgeeks.org/javascript-object-prototype-tostring-method/))

A simple `console.log(object);` will print the object in its bracket notation (curly braces surrounding a comma-separated listing of property name/value pairs, with a colon `:` between the property name and the value of each pair). This is unlike python's \__str\__ in that `.toString()` must be typed after the object for the specified string to print.


## 3.	How does inheritance work (if it does)? Does your language support multiple inheritance? 
JavaScript is a prototype-based language. JavaScript objects inherit properties from their prototype. When trying to access a property or method of an object, it is first looked for in the object and, if not found, will progress up a “chain” of inheritance, looking at the prototype of the object, and then the prototype’s prototype, and so on until a property or method by that name is found (and used) or not found and has reached an object with a prototype of `null`.
JavaScript classes are implemented by building on top of the prototypal model and act as an abstraction of it. Classes inherit from another class using the `extends` keyword. The `super()` function is then called in the child class’s constructor, causing it to inherit all the parent class’s properties and methods:
```
class Student extends Person {
    constructor(name, birthYr, m, g) {
        super(name, birthYr);
        this.major = m;
        this.gpa = g;
}
//define methods for Student here
    }
```

JavaScript does not support multiple inheritance for objects; an object can only have one prototype and a class can only extend one other class.
There is, however, the concept of “mixins”, which can be implemented as a sort of way around for using class methods from not-the-parent-class classes without inheriting them. The aforementioned approach does come with risks like overwriting existing methods. How this works was a bit more complicated than I was able to really understand at this point, but [this article](https://javascript.info/mixins#:~:text=Some%20other%20languages%20allow%20multiple,as%20we%20have%20seen%20above) was helpful.
[This article](https://rasaturyan.medium.com/multiple-inheritance-in-javascript-es6-4999e4b6584c) offers an interesting and less complicated way to work with single inheritance when you want an object to have access to properties and methods of multiple objects; construct a class that has objects of the classes they would like to inherit from assigned to its properties. Essentially a child class that contains properties whose values are objects of the desired-parent classes.
[mdn]( https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
[mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

## 4.	If there is inheritance, how does your language deal with overloading method names and resolving those calls? 
In JavaScript when a property/method name in a prototype is the same as that of one defined in an inheriting object, the redefinition in the object is used. This follows the idea/practice of chaining inheritance; if a property of the given name is found it will not be searched for any farther up the chain of prototypes. In JavaScript it is called “shadowing” the property.
([mdn]( https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes))

## 5.	Is there anything else that’s important to know about objects and inheritance in your language? 

- JavaScript has `get` and `set` keywords for binding an object property to a function to be called when that property is accessed, creating getter and setter functions. They can also be used with the same syntax in classes ([mdn]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)). 
```
class Person {
    constructor(n) {
        this._name = n;
    }
    get name() {
        return this._name;
    }
    set name(x) {
        this._name = x;
    } 
}
```
Getters and setters are called/used without parentheses, unlike other methods. Getters use dot notation without parentheses and setters use dot notation with no parentheses to create an assignment expression.
```
const p = new Person(“Jim”);
console.log(p.name); //Jim
p.name = “Bob”;
console.log(p.name); //Bob

```
([w3schools]( https://www.w3schools.com/js/js_object_accessors.asp))

- Private fields are denoted using a `#` prefix on the identifier name; properties, methods, getters, and setters can all be private. Private fields cannot be accessed from outside their class and require methods to expose or access them ([mdn]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes)).


-There are objects that are created as instances of a specific object type and then there are plain objects; “Objects created with initializers are called plain objects, because they are instances of Object, but not any other object type.” (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects). 
A plain object is created with an initializer and assigned to a variable:
```
const objName = {property1: “value”, property2: 234, property3: {p1: “a val”, p2: “another val”}};
```
If values are already assigned to variables, they can be used in an initializer in place of the regular syntax for property-value pairs, with the variable name becoming the property name and the value assigned to the variable becomes the value paired with the variable name:
const a = “first”;
const b = 2;
const obj = {a, b};
console.log(obj.a);     //output: first
console.log(obj.b);     //output: 2

- When used in an object method the `this` keyword refers to the object itself (ex: `fullname = function() {return this.firstName + “ ” + this.lastName}`

- Object values can be other objects. The values stored within the object-as-value can be accessed with dot notation. For example (using the above object `objName`):
`console.log(objName.property3.p2);`
output:
`another val`

- After an object is created more properties can be given to it:
```
const myObj = {};
myObj[“some property”] = “a property value for some property”;
```


# More citations:

-   https://www.w3schools.com/js/js_class_intro.asp
-	https://www.w3schools.com/js/js_object_definition.asp
-	https://www.w3schools.com/js/js_classes.asp


-   https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
-	https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming
-	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
-	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes


