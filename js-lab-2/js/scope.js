/**
 * Created by austin on 11/06/2016.
 */
/**
 * The variables a and b have block scope and are 'visible'
 * only within the if (flag) {...} block.
 * The variable c has function scope and is 'visible' within the entire
 * function myFunction block, including within the nested if block.
 */
function myFunction(flag) {
  if (flag) {
    const a = 1;  // The scope is inside the if-block
    let b = 2;  // The scope is inside the if-block
    var c = 3;  // The scope is inside the function

    // Both a and b in scope
    console.log(a);  // 1
    console.log(b);  // 2
    console.log(c);  // 3

  }

  // Only b is in scope here.
  console.log(a); // Uncaught ReferenceError because a has block scope
  console.log(b); // Uncaught ReferenceError because b has block scope
  console.log(c);  // 3 Because b has function scope
}

myFunction(true);

// Functions have access to variables defined in the same scope
const foo = 'hello';
function sayHello() {
  console.log(foo);
};

sayHello(); // "hello"
console.log(foo); // "hello"

/**
 * Code outside the scope in which a variable was defined does not have access
 * to the variable
 */

function sayHello()  {
  const foo = 'hello';
  console.log(foo);
};

sayHello(); // hello

console.log(foo); // undefined

/**
 * Variables with the same name can exist in different scopes
 * with different values
 */
const foo = 'world';

function sayHello()  {
  const foo = 'hello';
  console.log(foo);
};

sayHello(); // logs "hello"
console.log(foo); // logs "world"

// Functions can see changes in variable values after the function is defined
function myFunction()  {
  const foo = 'hello';
  function myFn()  {
    console.log(foo);
  };
  const foo = 'world';
  return myFn;
};

const f = myFunction();
f(); // "world"

// Scope insanity
// a self-executing anonymous function
(function () {
  const baz = 1;
  function bim() {
    alert(baz);
  };

  function bar() {
    alert(baz);
  };

})();

// baz is not defined outside of the function
console.log(baz);

// bar is defined outside of the anonymous function
// because it wasn't declared with var; furthermore,
// because it was defined in the same scope as baz,
// it has access to baz even though other code
// outside of the function does not
bar();

// bim is not defined outside of the anonymous function,
// so this will result in an error
bim();