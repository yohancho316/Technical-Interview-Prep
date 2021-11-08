/*

If you place JS code within the <script> tag and nested within the <head> tag, this method is referred to as
"in-line" script. The only advantage of using "in-line" is that we don't have to use an external JS file.

However, it is the norm to use external JS Files.

If you wish to place your JS code in an external JS file you must link the external JS file to the HTML file.
To link an external JS file you still use the <script> tag but it is placed within the <body> tag.
Syntax: <script src="JS-File.js"> </script>

All values in JavaScript are either objects (abstract data types) or primitive data types

Objects are:
let me = {
    name: "Jonas"
};

Primitives are:
let firstName = "Jonas";
let age = 30;

Types of Primitive Data Types in JavaScript
There are 7 types of primitive data types in JavaScript
- numbers (floating point numbers or decimal numbers)
- strings (sequence of characters / used for text / always enclosed in quotes, double quotes, or back ticks)
- boolean (logical type that can only be true or false)
- Undefined (value taken by a variable that is not yet defined / empty value)
- Null (also means 'empty value')
- Symbol (Value that is unique and cannot be changed)
- Bigint (Larger integers than the Number type can hold)

Dynamic Typing: JavaScript has dynamic typing which means we do NOT have to manually / explicitly define the data type
of the value stored in a variable upon declaration. Instead, data types are determined automatically. This also means
that variables can be reassigned to hold values of a completely different type

JavaScript files are executed sequentially from top to bottom

typeof is an operator that prints in text the type of any value passed as an argument into this operator

3 Ways of Declaring Variables in JavaScript
There are 3 ways to declare variables in JS: let, var, const

When variables need to be mutated / reassigned values use the "let" keyword. This includes undefined variables
Example: let x;

Use the const keyword for variables whose values cannot be changed. These variables must be assigned a value and cannot
be empty.

var is an older way of declaring variables. It works similarly to the let keyword.

let is block scoped & var is function scoped

Arithmetic Operators: +, -, *, /, %, ** (exponential)

Assignment Operators: =, +=, -=, *=, /=, ++, --

Comparison Operators: >, >=, <, <=, ===, ==, !=, !==

Logical Operators: &&, ||, !

Template Literals: Allows you to insert variables / expressions into the string denoted by ${}.
                   Expressions are first evaluated and then inserted.
                   Template literals must be enclosed by back ticks, not single or double quotes.
                   Template literals allow you to create multi-line strings that following indentation you include

Type Conversion: When we manually convert data from one data type to another explicitly.
                 To explicitly convert a non-number data type to a number data type use Number()
                 If you attempt to convert a data types that cannot be converted to number, NaN is returned.

                 To explicitly convert a non-string data type to a string data type use String()
                 Usually when declaring a string variable you use lowercase however when converting explicitly use "S".

                 You cannot convert values to a Undefined or Null data types.

Type Coercion: When JavaScript automatically converted data from one data type to another implicitly.
               This occurs automatically when JavaScript is dealing with an operation that consists of data of differing
               types.
               One example of type coercion is String concatenation.
               Another example of type coercion is with String template literals.
               When using any operator other than "+" with strings, JavaScript will automatically implicitly convert
               them string numbers to number type.

Truthy & Falsy Values: There are 5 Falsy values: 0, '', undefined, null, NaN
                       A falsy value is a value when converted to a boolean will evaluate to false.
                       Everything else is referred to as a Truthy value.

Switch Statement: Here is the syntax to create a switch statement

switch(expression) {
    case 1:
        // do something
        break;
    case 2:
        // do something
        break;
    default:
        // do something
}

Expression: An expression is a line of code that produces a value.

Statement: A statement is executed and doesn't produce a value by itself but is composed of expressions.

JavaScript Releases / Versions



 */
