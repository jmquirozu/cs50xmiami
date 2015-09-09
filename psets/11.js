/*
The Age Calculator part 2

Forgot how old you are? Calculate it!

Write a function named calculateAge that:
- takes 2 arguments: birth year, current year.
- calculates the 2 possible ages based on those years.
- outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

// write your solution here...


function calculateAge(birth){
  var today = new Date();
  var year = today.getFullYear();

  Age = year - birth ;

  console.log('You are either ' + (Age -1) +  ' or '+ Age );

}

calculateAge(1972);
calculateAge(1980);
calculateAge(1977);
