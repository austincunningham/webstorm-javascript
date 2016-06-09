/**
 * Created by austin on 09/06/2016.
 * conditional checking
 *
 * Define two variables called option1 and option2.
 * Set option1 and option2 to true and false respectively.
 * Using an if statement print to the console:
 * "both True"
 * "both False"
 * "option1 only true"
 * "option2 only true"
 * Change the values manually to generate each of the outputs in turn.
 */

const option1 = true;
const option2 = false;
console.log('option1 = ' + option1);
console.log('option2 = ' + option2);
if (option1 && option2) {
  console.log('both true');
}

if (!option1 && !option2) {
  console.log('both false');
}

if (!(option1 && option2)) if (option1) {
  console.log('option1 only true');
} else if (option2) {
  console.log('option2 only true');
}
