/*

Dynamic Typing:
- JavaScript is a loosely typed and dynamic language.
- Variables in JavaScript are not directly associated with one exact data type at time of declaration (loosely typed)
- Variables can be assigned and re-assigned values of differing types (dynamic)

JavaScript Data Types:
- There are a total of 9 data types in JavaScript.
- 8 Data Types are Primitive Types and 1 abstract data type
- Primitive Types:
    1. Boolean
    2. Null
    3. Undefined
    4. Number -> 2^64 bit representation
    5. BigInt
    6. String -> 2^16 bit representation
    7. Symbol
- Abstract Type:
    1. Object

strict mode: strict mode is activated for security purposes.
             To enable strict mode at the start of the JavaScript file add "use strict;".
             Keep in mind, "use strict" must be enclosed in quotes to qualify.
             If there is any code preceding this line, strict mode will NOT be enabled. The only exception
             to this rule are comments.
             Strict mode makes it easier to avoid accidental errors and bugs.
             Strict mode protects the code by preventing certain bad actions and shows bugs that the compiler wouldn't
             normally catch.

Functions:
- Functions are of Object data-type, because they can have properties and methods just like other objects.
  However, unlike objects, functions can be called.
- Functions without a return type will return undefined by default.
- Arguments are passed to functions by value. If the function changes the value of an argument, this change is
  NOT reflected globally only within the scope of the function.
- Variables / properties declared within the function have function scope if they are declared with the "let" or "const"
  keywords. Variables declared with the "var" keyword have global scope, even outside of the function block.
- If you pass extra arguments, the extra ones are ignored. Missing arguments are assigned the value undefined.
- The "this" keyword does NOT refer to the currently executing function, so you MUST refer to the Function objects
  by name, even within the function body. If the function is provided properties.
- There are 3 ways to define functions:
    1. Function Declaration
    2. Function Expression
    3. Arrow Functions


Function Declaration Method
- The function declaration method uses the keyword "function" to declare and define the function.
- Function declarations are NOT part of the regular top-to-bottom flow of control. They are conceptually moved to the
  top of their scope and can be used by all the code in that scope. This is due to hoisting.
- Unliked function expressions, functions do not need to be terminated by the ; character.
- Syntax:
    function function_name(arguments) {
        // body code
        return value;
    }


Function Expression Method
- The function expression method is similar in syntax to function declarations.
- The name of function expressions can be omitted and in this case, the function becomes known as an anonymous function
- Function expression blocks must be terminated by a semicolon (;)
- Function expressions that are binded to variables can be treated as values meaning they can even be passed as
  arguments
- Function expressions are NOT hoisted onto the beginning of the scope, therefore they cannot be used before they appear
  in the code.
- Syntax:
    const x = function () {
        // body code
        return value;
    };


Arrow Function Method
- Instead of the "function" keyword, it uses an arrow => notation.
- The arrow notation comes AFTER the list of parameters and is followed by the function's body.
- Arrow functions must be terminated with a semicolon if the braces are not omitted.
- When there is only one parameter name, you can omit the parentheses around the parameter list.
- If the body is a single expression, rather than a block in braces, that expression will be returned from the function
- Syntax:
    const x (arg1) => {
        // body code
        // return value;
    };
  or
    const x arg1 => return value;


Call Stack
- Because a function has to jump back to the place that called it when it returns, the computer stores this context in
  the call stack.
- Everytime a function is called, the current context is stored on top of this stack.
- When a function returns, it removes the top context from the call stack and uses that context to continue execution.
- Storing this stack requires space in the computer's memory.

Using the Arguments Object
- The arguments passed to a function are maintained in an array-like object.
- Within a function, you can access the arguments passed to it.
- Syntax: arguments[i], where i is the number of the argument.

Arrays
- The Array class is of type Object and high level are list-like objects whose prototype has methods to perform
  traversal and mutation operations.
- Neither the length of a JavaScript array nor the types of its elements are fixed.
- Since an array's length can change at any time, data are stored at non-contiguous locations in memory.

Array Operations Overview
1. Looping Over an Array
   array.forEach();

2. Adding an Item to the End of an Array
   array.push();

3. Remove an Item from the End of an Array
   let last = array.pop();

4. Remove an Item from the Beginning of an Array
   let first = array.shift();

5. Insert an Item to the Beginning of an Array
   array.unshift();

6. Find the Index of an Item in the Array
   array.indexOf();

7. Remove an Item Index Position
   array.splice(start-pos, #-of-elements);

8. Create a Shallow Copy of an Array
   let shallowCopy = array.slice();

9. Check if an Item Exists in an Array
   array.exists();


Objects:
- An object is a collection of properties, and a property is an association between a name (key) and a value
- Inside the braces, there is a list of properties separated by a colon and a value.
- Reading a property that doesn't exist will give you the value undefined.
- A property's value can be a function, in which case the property is known as a method.
- To assign a value to an object's property use the = operator. This will replace the property's value if it already
  exists or create a new property on the object if it didn't.
- The binary "in" operator, when applied to a string and an object, tells you whether that object has a property with
  that name.
- To retrieve all of the properties (keys) that an object possesses use the Object.keys() method. This returns an array
  of strings containing the properties.
- All object inherit the Object prototype.

Creating New Objects
- There are three main ways to create objects
1. Using Object Initializers

   let obj = {
      property1: value1,
      property2: value2,
      method1: function(arg1, arg2) {
        // code
      }
      method2(arg1, arg2) {
        // code
      }
   };

2. Using a Constructor Function & New Operator

    function obj(value1, value2) {
        this.property1 = value1;
        this.property2 = value2;
        this.method() {
            // code
        }
    }

    let obj1 = new obj();

3. Using the Object.create method
   - The benefits of using the Object.create() method is that we can select whichever object / class we wish to instantiate

   let obj = {
      property1: value1,
      property2: value2,
   };

   let my_obj = Object.create(obj);

Comparing Objects
- When comparing objects with the == operator you aren't testing for identical object properties rather you are
  checking for the equality of its references or memory addresses.

Creating Shallow Copies
- When you assign an existing object to create a copy you are creating a shallow copy meaning dynamic references will
  be copied and both objects will refer to the dynamic object.


Higher Order Functions
- Higher-order functions are functions that operate on other functions, either by taking them as arguments or by
  returning them. Remember, functions can be treated as regular values.
- You can use higher order functions to change other functions.
- Higher-order functions are best to use when performing data processing.
- Let's take a look at a function that returns a function:

  function greaterThan(n) {
    return m => m > n;
  }

  let greaterThan10 = greaterThan(10);

  // returns the defined arrow function below...
  const (m) => {
    return m > n
  }

  console.log(greaterThan10(11)); // returns true

  // We pass the value 11 and the arrow function evaluates 11 > 10 which returns true


DOM & DOM Manipulation
- DOM stands for Document Object Model
- The DOM is a structured representation of HTML documents. It allows JavaScript to access HTML elements and CSS styles
  to manipulate them.
- By manipulating the DOM we can change text, HTML attributes, and CSS styles applied to an HTML document.
- The DOM is automatically created by the browser as soon as the HTML page is loaded.
- The DOM structure is stored as a DOM tree.
- At the top of the DOM tree we have the Document object which is a special object that serves as the entry point to the
  DOM.
- The DOM methods and properties for DOM manipulation are NOT part of the JavaScript language.
- The DOM methods and properties are part of Web APIs, libraries that browsers implement.


document.querySelector()
- .querySelector() is a method that is made available to Document class objects.
- We can use JavaScript to select HTML tags to manipulate with HTML selectors.
- A commonly used HTML selector is "document.querySelector()"
- The Document method querySelector() returns the first Element within the document that matches
  the specified selector, or group of selectors. If no matches are found, null is returned.
- The matching is done using depth-first pre-order traversal of the document's nodes starting with the first element
  in the document's markup and iterating through sequential nodes by order of the number of child nodes.
- If you need a list of all elements matching the specified selectors, you should use querySelectorAll() instead.
- If you select an HTML tag that has an existing class name you must include a dot before the name of the class:
  For example: document.querySelector('.class-name');

Types of Selectors
- There are many types of selectors that are made available to the Document class objects.
- Class Selectors = ".class-name"
- ID Selectors = "#id-name"
- HTML & CSS Tag Selectors = "html-css-tag"

document.querySelector('html-tag').textContent
- This query selector first selects the HTML or CSS tag and retrieves the text stored within.
- You can use document.querySelector().textContent to retrieve AND set the text assigned to the specified selector.
  Example: document.querySelector(".message").textContent = "new-text-content";

document.querySelector().value
- For <button>, <input> and <option> HTML elements, the value attribute specifies the initial value of the element.
- When used with the Document method .querySelector() we are able to grab the value that the user enters in the input
  tag.

Handling Click Events
- An event is something that happens on the page, such as a key-press, mouse movement, etc.
- To handle events you need to use event listeners.
- The .addEventListener() is another method that are part of Document class objects.
- To add an event listener to the document.querySelector() method use the following code:
  document.querySelector(".class-name").addEventListener();
- The .addEventListener() expects two required arguments
- The first argument you pass to the .addEventListener() method needs to be the type of event you are catching.
- The second argument is the function that is run when the event occurs. When the event occurs, an event object is
  passed to the function as the first parameter. The type of event object depends on the specified event.
- You can also refer to an external "named" function as the second argument instead of defining the function within
  the argument list.

Using the DOM to Manipulate CSS
- When you use the document.querySelector() method to manipulate CSS styles, if the element's attribute name,
  i.e. background-color, box-sizing, etc, is composed of two words we MUST use camel casing.
  document.querySelector().backgroundColor = "value";
- Additionally when selecting a css style you must first use style.style-attribute on whichever attribute of the style
  class you are trying to manipulate.











 */


