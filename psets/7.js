/*
FixStart

Create a function called fixStart.
It should take a single argument, a string, and return a version where all
occurences of its first character have been replaced with '*',
except for the first character itself. You can assume that the string is at least one character long.

For example:

fixStart('babble'): 'ba**le'
*/

function fixStart(s) {
  // write your solution here...
  var first =s[0];
  // var str2 = s.slice(1);
//  var rep = str2.replace(first, "*");
  var newst = first ;
//console.log (first);
  for (var i = 1 ; i < s.length ; i++)
     {
       if (s[i] == first)
         newst = newst + "*"
       else {
         newst = newst + s[i]
       }
          // console.log (s[i]);
     };
  console.log (newst);
}

fixStart('babble')
