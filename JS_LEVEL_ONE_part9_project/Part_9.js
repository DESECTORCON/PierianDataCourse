var firstName = prompt("First Name Please: ");
var lastName = prompt("Last Name Please: ");
var age = prompt("How old are you? ")
var height = prompt("What is your height?");
var petName = prompt("What is your pet name? ");
alert("Thank you so much for the information!");

var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

// NAME CONDITION
if (firstName[0] == lastName[0]) {
  nameCond = true;
}
else {
  nameCond = false;
}

// AGE CONDITION
if (age > 20 && age < 30) {
  ageCond = true;
}else {
  ageCond = false;
}

// HEIGHT CONDITION
if (height >= 170) {
  heightCond = true;
}else {
  heightCond = false;
}

// PETNAME CONDITION
if (petName[petName.length-1] === "y") {
  petCond = true;
}else {
  petCond = false;
}

if (nameCond && ageCond && heightCond && petCond) {
  console.log("WELCOME SPY!");
}else {
  console.log("Nothing to see here");
}

// var SPYFIRSTNAME = "Jose";
// var SPYLASTNAME = "Johnson";
// var SPYAGE = "26";
// var SPYTALL = "175";
// var SPYPETNAME = "Sammy";
// var SpyFirstName = prompt("Hello and Welcome. Please enter your first name:");
// var SpyLastName = prompt("Please enter your Last Name:");
// var SpyAge = prompt("How old are you?");
// var SpyTall = prompt("How tall are you in centimeters?");
// var SpyPetName = prompt("What is the name of your pet?");
// alert("Thank you so much for the information.");
//
// if (SpyFirstName === SPYFIRSTNAME & SpyLastName === SPYLASTNAME) {
//   if (SpyAge === SPYAGE) {
//     if (SpyTall === SPYTALL) {
//       if (SpyPetName === SPYPETNAME) {
//
//         console.log("Welcom Comrade! You've passed the Spy Test");
//
//       }
//     }
//   }
// }
// else {
//   console.log("Sorry, nothing to see here.");
// }
