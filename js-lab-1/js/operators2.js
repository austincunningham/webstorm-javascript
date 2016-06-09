/**
 * Created by austin on 07/06/2016.
 */
// Comparison operators
const foo = 1;
const bar = 0;
const baz = '1';
const bim = 2;

console.log(foo == bar);// false
console.log(foo != bar);   // true
console.log(foo == baz);   // true; Because == operator performs type coercion on different types

console.log(foo === baz);  // false
console.log(foo !== baz);  // true
console.log(foo === parseInt(baz)); // true

console.log(foo > bim);  // false
console.log(bim > baz);  // true
console.log(foo <= baz);  // true