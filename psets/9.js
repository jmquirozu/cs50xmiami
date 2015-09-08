/*

Not Bad

Create a function called notBad that takes a single argument, a string.
It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'

*/

function notBad(sentence) {
  // write your solution here...
 var pos1 = sentence.search('not');
 var pos2 = sentence.search('bad')

 if  ( (pos1 != -1) && (pos2 != -1) && (pos2 > pos1) )
  var newsent = sentence.slice(0, pos1) + "good"
  else {
    newsent = sentence;
  }

  console.log (newsent);
}

notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');
