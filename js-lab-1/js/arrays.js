/**
 * Created by austin on 07/06/2016.
 */
// Using the push(), pop(), unshift() and shift() methods on an array
const foo = [];

foo.push('a');//add a new array element
foo.push('b');

console.log(foo[0]); // => a
console.log(foo[1]); // => b

console.log(foo.length); // => 2

foo.pop();//remove last array element??

console.log(foo[0]); // => a
console.log(foo[1]); // => undefined

console.log(foo.length); // => 1

foo.unshift('z');//add an element to beginning of array

console.log(foo[0]); // => z
console.log(foo[1]); // => a

console.log(foo.length); // => 2

foo.shift();//remove first element from array

console.log(foo[0]); // => a
console.log(foo[1]); // => undefined

console.log(foo.length); // => 1