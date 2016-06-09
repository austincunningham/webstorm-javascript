/**
 * Created by Austin on 09/06/2016.
 * Write a code fragment containing a switch statement - call it.
 * The switch is to check a string called grade for good, excellent and 'outstanding` strings.
 * It should log to the console a suitable congratulatory message depending on which string is present.
 * Run the program by declaring and initialising the grade variable.
 * Could you find a way to display an alert box asking for a string -
 * and then have the switch log the message based on the value entered in the alert box?
 */

window.onload = function () {
  checkGrade();
  function checkGrade() {
    const grade = prompt('Grades are in, enter a String in using good,excellent or outstanding');
    switch (grade) {
      case 'good':
        console.log('good! but not great');
        document.getElementById('switch').innerHTML = 'good! but not great';
        break;
      case 'excellent':
        console.log('excellent. but you can do better');
        document.getElementById('switch').innerHTML = 'excellent. but you can do better';
        break;
      case 'outstanding':
        console.log('outstanding. How you like them apples?');
        document.getElementById('switch').innerHTML = 'outstanding. How you like them apples?';
        break;
    }
  }
}