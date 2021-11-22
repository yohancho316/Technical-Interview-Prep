/*

strict mode: strict mode is activated for security purposes.
             To enable strict mode at the start of the JavaScript file add "use strict;".
             Keep in mind, "use strict" must be enclosed in quotes to qualify.
             If there is any code preceding this line, strict mode will NOT be enabled. The only exception
             to this rule are comments.
             Strict mode makes it easier to avoid accidental errors and bugs.
             Strict mode protects the code by preventing certain bad actions and shows bugs that the compiler wouldn't
             normally catch.


 */

// "use strict";

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true; // had we enabled strict mode this would show up as red.

/*

Functions:
- Functions are of Object data-type, because they can have properties and methods just like other objects.
  However, unlike objects, functions can be called.
- Functions without a return type will return undefined by default.
- Arguments are passed to functions by value. If the function changes the value of an argument, this change is
  NOT reflected globally only within the scope of the function.
- Variables / properties declared within the function have function scope if they are declared with the "let" or "const"
  keywords. Variables declared with the "var" keyword have global scope, even outside of the function block.
- The "this" keyword does NOT refer to the currently executing function, so you MUST refer to the Function objects
  by name, even within the function body. If the function is provided properties.
- There are 3 ways to define functions:
    1. Function Declaration
    2. Function Expression
    3. Arrow Functions

Function Declaration Method
- The function declaration method uses the keyword "function" to declare and define the function.
- Function declarations are NOT part of the regular top-to-bottom flow of control. They are conceptually moved to the
  top of their scope and can be used by all the code in that scope.
- Unliked function expressions, functions do not need to be terminated by the ; character.

function function-name() {
    // body code
}

There are 3 types of ways to create functions in JavaScript

1. Function Declaration (using the word "function" to declare the function
2. Anonymous Functions (assigning a function to a variable identifier - binding)
3. Arrow Functions

Anonymous Functions: An anonymous function is a function with a name / identifier. An anonymous function is often
                     not accessible after its initial creation. We often use anonymous functions as arguments of
                     other functions. You can even create the function and execute it immediately after declaration.
                     Anonymous functions can be treated as values.

                     The primary difference between function declarations & anonymous functions are that function
                     declarations are defined at the beginning of the program run time regardless of where they are
                     defined in the source file. However, if you use anonymous functions prior to their declaration,
                     they will throw an error. This is due to the concept of hoisting.

Arrow Functions: Arrow functions are just another form of Anonymous Functions that are shorter & faster to write.
                 The syntax for an arrow function is:
                 const var-name = functionName => () {
                    // function body
                 }
                 However, if there are no arguments passed you can omit () and if the function body is only one line,
                 you can omit the { }.
                 const var-name = functionName => code;




 */

doesItChange(40);
y();


function doesItChange(x) {
    x = 25;
    console.log(x);
}

const y = function doesItChange2(x) {
    x = 500;
    console.log(x);
}

