/**
 * Created by austin on 07/06/2016.
 */
// Creating an object with the object literal syntax:
const person2 =
{
  firstName: 'Jane',
  lastName: 'Doe',
};

console.log(person2.firstName + ' ' + person2.lastName);
const person1 = {};

person1.firstName = 'John';
person1.lastName = 'Doe';

// As mentioned, objects can also have objects as a property.
const people = {};

people.person1 = person1;
people.person2 = person2;

console.log(people.person1.firstName);
console.log(people.person2.firstName);