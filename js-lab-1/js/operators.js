/**
 * Created by austin on 07/06/2016.
 */
const foo = 1;
const bar = '2';
console.log(foo + bar);

console.log(foo + Number(bar));

console.log(foo + +bar);

// Logical operators
const barr = 0;
const baz = 2;

// returns 1, which is true
console.log(foo || barr);

// returns 1, which is true
console.log(barr || foo);

// returns 0, which is false
console.log(foo && barr);

// returns 2, which is true
console.log(foo && baz);

// returns 1, which is true
console.log(baz && foo);