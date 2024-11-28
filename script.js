// Intro to JavaScript

// JavaScript is a programming language that runs on most websites.
// JavaScript interacts with your HTML through IDs.

// Connect your JS file to your HTML document
// Use the command <script defer src="script.js"></script> in your HTML <head>

// Comments: Used to oragnize code and inform anyone reading your code.
// Comments can be used to temporarily have JS ignore parts of your code (useful when debugging)

// Alert: This command outputs statements using an alert box.

// Ex. Output the phrase "Hello World!" in an alert box.
// alert("Hello World!");

// You Try:  Output the phrase "I am learning JavaScript and I am so excited!"
// You Try: What is wrong with this command?  alert(I love LaZerte!)

// Console: Tool in browsers to send debug messages and read errors.

// Variables: Programming memory. Variable hold a single piece of data related to the program.
// Ex. Create 4 variables to hold this data: your name, your age, Pi, your favorite colour.
// let myName = "Mr. Bacque"; // String data
// var myAge = 43; // Number data
// let pi = 3.14; // Number data
// var faveColor = "blue"; // String data

// Use either var or let when first creating a variable
// String data always in quotes, not for numbers
// equals sign (=) is called the "assignment operator". It assigns Right to Left.
// E.g.  let "mars" = planet is an error, you cant assign in this direction.

// You Try: What is the difference between alert(myName) and alert("myName")?
// alert(myName) will print "Mr.Bacque"
// alert("myName") prints "myName"

// Template Strings: Strings combined with variables
// Ex. My name is <myName> and I am <myAge> years old.

// let sentence = `My name is ${myName} and I am ${myAge} years old`;
// alert(sentence);

// DO NOW

// Create a variable to store your favorite TV/Movie character
// Create a variable to store the name of the tv show or movie
// Create a variable to store an "episode" number (you choose the number, it doesn't have to be accurate)
// Alert the phrase:  "I love to watch <character name> from <show name>. They were especially great in episode <episode number>"

// Camel Casing:  2+ words in a variable, capitalize 2nd, 3rd, etc... words.  E.g myVariableName = "the name"
// Underscore naming: 2+ word in a variable, separate with an understore.  E.g. my_variable_name = "the name"
// let characterName = "Gimli, son of Gloin";
// let movieName = "The Lord of the Rings";
// let episodeNumber = 1;
// let sentence = `I love to watch ${characterName} from ${movieName}. They were espeically great in episode ${episodeNumber}`;

// alert(sentence);
// console.log(sentence);

// String Concatenation: Another way to include varables in your sentences
// var timeOfDay = "afternoon";
// var name = "Jesse";
// var sentence = "Good " + timeOfDay + ", " + name + ".";
// console.log(sentence);

// You Try.  Make a sentence and console.log it using these 2 variables and string concatenation.
// var size = "medium";
// var type = "hot chocolate";
// var sentence =
//   "Hello, here is your " + size + " " + type + ". Have a good day!";
// alert(sentence);

// Prompt: A way to getting data from the user.
// E.g. Ask the user what drink they want and what size.  Then output their order.
// var type = prompt("What drink would you like?");
// var size = prompt("What size drink do you want?");
// var sentence = "Hello, here is your " + size + " " + type + ". Have a good day!";
// alert(sentence);


// IPO:  Stands for Input, Process, Output.  Describes the algorithm for writing simple programs.
// Algorithm: steps to solve a programming problem.
// Input: How and where you get data (e.g. prompt for data, or create our own data in variables)
// Processing: What happens to the data
// Output: What you do with the processed data (e.g. alert/console.log, or update our website)

// E.g. Take the drink order program and separate its IPO steps.

// // input
// var type = prompt("What drink would you like?");
// var size = prompt("What size drink do you want?");

// // processing
// var sentence = "Hello, here is your " + size + " " + type + ". Have a good day!";

// // output
// alert(sentence);
// This is a simple pizza order application

// Input: Prompt user for pizza size and toppings
let pizzaSize = prompt("Enter the size of your pizza (small, medium, large):"); 
let topping1 = prompt("Enter your first topping:"); 
let topping2 = prompt("Enter your second topping:"); 

// Output: Create a message using template strings
let message = `Your ${pizzaSize} pizza with ${topping1} and ${topping2} will be ready in 20 minutes.`;

// Display the message using alert
alert(message);

// Log the message to the console
console.log(message);
