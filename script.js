// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Here is where I have the java to ask the user all the questions
//for their password
var generatePassword = function() {
  //sets default value to 0
  var lower = 0;
  var upper = 0;
  var special = 0;
var length = window.prompt("Enter a number between 8 and 128:");
if (!length) {
  return;
}
  var lower = window.confirm("Would you like lowercase letters?");
  //if confirmed, then it changes the value of lower to 1 for later
  if (confirm (lower = 1))
  var upper = window.confirm("Would you like uppercasecase letters?");
  if (confirm (upper = 1))
  var special = window.confirm("Would you like special characters?");
  if (confirm (special = 1))


//my bridge from the math functions to displaying the password
var randomfunc = {
  lower: getRanLow,
  upper: getRanUp,
  Number: getRanNum,
  special: getRanSpec
}



//Here's my math for picking random capital letters/num/symbs using char code
function getRanUp() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


function getRanLow() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}


function getRanNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRanSpec() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 32);
  
 }
//computes the password here
var i;
for (i = 0; i < length;) {
if (lower == 1) {
  console.log (lower)
} 
}
}


