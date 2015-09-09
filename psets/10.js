/*
The Fortune Teller part 2

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

// write your solution here...
function tellFortune(numchi, parnam, geoloc, jobtit ){

  console.log ("You will be a "+ jobtit + " in "+geoloc+", and married to "+parnam+" with "+ numchi+" kids.");
}

tellFortune(1, "ana", "mia", "lawyer" );
tellFortune(2, "bea", "col", "doctor" );
tellFortune(1, "carmen", "nyc", "it" );
