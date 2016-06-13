/**
 * Created by austin on 13/06/2016.
 */
alert('Executing script file : example.js');

const cars = ['Ford', 'Honda', 'Nissan', 'Peugot'];

const manual = {
  title: 'Fix Me',
  author: 'H. Wrench',
};

cars.push(manual);
cars.push('Lexus');

for (let i = 0; i < cars.length; i += 1) {
  console.log('cars array index (number) ', i, '  ', cars[i]);
}