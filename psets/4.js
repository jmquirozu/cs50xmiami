/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...
var tempC = 100;

var tempF =  (tempC * 9 / 5) + 32;
console.log (tempC + " C is " + tempF + "F");

tempF = 78;
tempC = (tempF - 32) * 5 / 9 ;
console.log (tempF + "F is "+ tempC);
