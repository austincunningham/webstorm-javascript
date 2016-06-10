/**
 * Created by Austin on 09/06/2016.
 * Create and link to a file called loops.js.
 * create an array object of 8 elements.
 * insert some random values into each position in the array.
 * write a for loop to print each value to the console
 * Additionally, write code fragments to:
 * count and print out the number of elements greater than zero
 * compute the average of all the numbers
 * Finally, write a code fragment to find the largest and smallest numbers in the list
 */

window.onload = function () {
  myarray();
  function myarray() {
    const myarray = [];
    let sum = 0;
    for (let i = 0, t = 8; i < t; i++) {
      myarray.push(Math.round(Math.random() * t));
      console.log('Full array :' + myarray[i]);
    }

    for (let i = 0; i < myarray.length; i++) {
      if (myarray[i] > 0) {
        console.log('Filtred Array :' + myarray[i]);
        sum += myarray[i];
      }
    }
    console.log('Sum :' + sum);
    console.log('Average :' + (sum / 8));
    let max = Math.max.apply(Math, myarray);
    let min = Math.min.apply(Math, myarray);
    console.log('Max :' + max + ' Min :' + min);
  }
}