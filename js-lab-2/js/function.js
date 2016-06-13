/**
 * Created by Austin on 11/06/2016.
 * Introduce new function call to greet other people
 * - and make sure the console displays the greeting.
 * Change the greeting such that is it displayed in an alert box.
 */

function greet(person, greeting)  {
  const text = greeting + ', ' + person;
  console.log(text);
  return text;
};

greet('Rebecca', 'Hello');
alert(greet('Rebecca', 'Hello'));