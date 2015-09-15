/*
What number's bigger?

Write a function named greaterNum that:
- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.

Call that function 2 times with different number pairs,
and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
*/

// write your solution here...
function greaterNum(num1, num2){
  var numg = 0;
  if (num1 > num2)
    { numg = num1 }
  else if (num2 > num1)
     {numg = num2}
  else {
    console.log( num1+ (" is equal than ")+num2 );

  }
  if (numg != 0)
     console.log("The greater number of " + num1+ (" and ")+num2 +"is :"+ numg);
}

greaterNum(3,2);
greaterNum(5,7);
greaterNum(30,30);
