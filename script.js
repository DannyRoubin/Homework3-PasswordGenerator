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
var length = window.prompt("Enter a number between 8 and 128:");
if (!length) {
  return;
}
  var lower = window.confirm("Would you like lowercase letters?");
  var upper = window.confirm("Would you like uppercasecase letters?");
  var special = window.confirm("Would you like special characters?");


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
//}
 
//  console.log(getRanUp());
//  console.log(getRanLow());
//  console.log(getRanNum());
//  console.log(getRanSpec());
 
}
