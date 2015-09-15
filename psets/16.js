/*
The World Translator

Write a function named helloWorld that:
- takes 1 argument, a language code (e.g. "es", "de", "en")
- returns "Hello, World" for the given language, for at least 3 languages.
  It should default to returning English.

Call that function for each of the supported languages
and log the result to make sure it works.
*/

// write your solution here...
function helloworld(lan){
  switch (lan) {
  case "es":
    console.log("Hola Mundo");
    break;
  case "fr":
    console.log("c va le monde!");
    break;
  case "en":
    console.log("hello world");
    break;
  default:
    console.log("Sorry, I don't know that lang: " + lan + " I'll tell you in English: HELLO WORLD! .");
}
}

helloworld('en');
helloworld('fr');
helloworld('es');
helloworld('de');
