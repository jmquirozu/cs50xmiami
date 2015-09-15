/*
The Pluralizer

Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".

Call that function for a few different scores and log the result to make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

// write your solution here...
function Pluralizer (number, noun){
  if (number > 1)
  noun_new = noun + "s"
  else {
    noun_new = noun
  }
  console.log(number+" "+ noun_new);
}

Pluralizer(2, "dog");
Pluralizer(1, "cat");
Pluralizer(5, "cow");
Pluralizer(0, "lion");
