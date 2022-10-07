// Get name of dog and store in variable
var dogName = prompt("What's your dog's name?");

// Get age of dog in doggie years ands store in a variable
var dogYears = prompt("How old is your dog in doggie years? (type a number):")

// Make sure the name is stored with only the first letter capitalized and thye rest lowercase
var firstLetterCap = dogName.slice(0, 1).toUpperCase();
var nameBodyLower = dogName.slice(1, name.length).toLowerCase();
var capName = firstLetterCap + nameBodyLower;

// Convert doggie years to human years and store in a variable
var humanYears = (dogYears - 2) * 4 + 21;

// Alert the user to the name and human age of the dog in question
alert("Who's the greatest dog... " + capName + " is!!! And " + capName + " is " + humanYears + " years old, in human years that is!" );
