/**
 * Created by austin on 10/06/2016.
 */
// native forEach
function printElement(elem) {
  console.log(elem);
}

function printElementAndIndex(elem, index) {
  console.log('Index ' + index + ': ' + elem);
}

function negateElement(elem, index, array) {
  array[index] = -elem;
}

myArray = [1, 2, 3, 4, 5];

// prints all elements to the console
myArray.forEach(printElement);

// prints 'Index 0: 1' 'Index 1: 2' 'Index 2: 3' ...
myArray.forEach(printElementAndIndex);

// myArray is now [-1, -2, -3, -4, -5]
myArray.forEach(negateElement);
