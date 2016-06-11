/**
 * Created by Austin on 11/06/2016.
 * In objects.js do the following:
 * Introduce a new field into the object called 'email'.
 * Initialise the email to some valid address
 * Log the email address
 * Make the 'sendMail' function also print out the email address as well as the name.
 *
 * Using this code as a guide, create a new object call myLocation.
 * It should have location-name, latitude, longitude and description as its fields.
 * It should then have a method 'showLocation' to log the current location to the console
 */

const myObject =
{
  sayHello: function () {
    console.log('hello');
  },

  myName: 'Rebecca',
  email: 'becca@becca.com',
  sendMail: function () {
    myObject.sayHello();
    console.log(myObject.myName);
    console.log(myObject.email);
  },
};

const myLocation =
{
  location_name: 'Dublin', //location-name doesn't fit with style guide
  latitude: 53.279081,
  longitude: -6.370622,
  description: 'this is where the Google speak goes',
  showLocation: function () {
    console.log('Location Name :' + myLocation.location_name);
    console.log('Latatude :' + myLocation.latitude);
    console.log('Longitude :' + myLocation.longitude);
    console.log('Description :' + myLocation.description);
  },
};

myObject.sayHello(); // "hello"
console.log(myObject.myName); // "Rebecca"
console.log(myObject.email);// "email"
console.log('____________________________________');
myObject.sendMail();
console.log('____________________________________');
console.log(myLocation.showLocation());