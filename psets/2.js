/*
The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

- Store your current age into a variable.
- Store a maximum age into a variable.
- Store an estimated amount per day (as a number).
- Calculate how many you would eat total for the rest of your life.
- Output the result to the screen like so:
"You will need NN to last you until the ripe old age of X".
*/

// write your solution here...
var age = 42;
var agemax = 100;
var dayamt = 3;
var total = (agemax - age) *dayamt ;
console.log("you will need " + total + " to last you until the ripe old age of " + agemax);
