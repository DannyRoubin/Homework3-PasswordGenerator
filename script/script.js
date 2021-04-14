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
//Following chunk of vars simply writes out all of the available
//characters, and leaves empty strings for character pool a
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChars = lowerCaseChars.toUpperCase();
var numbers = "1234567890";
var specialChars = "`~!@#$%^&*()_-+=;:/?.,><";
var characterPool = ""
var length;

//picks a random character from the character pool
function randomIndex() { 
return characterPool.charAt(Math.floor(Math.random() * characterPool.length));
}

//Here is where I have the java to ask the user all the questions
//for their password
var generatePassword = function() {

  //asks user how long they want their password to be
var length = window.prompt("Enter a number between 8 and 128:");
if (length < 8) {
  return;
}
//asks for lowercase letters
  var lower = window.confirm("Would you like lowercase letters?");
  if (lower){
  characterPool += lowerCaseChars
  }
  //asks for uppercase letters
  var upper = window.confirm("Would you like uppercase letters?");
  if (upper){
    characterPool += upperCaseChars
    }
    //asks for numbers
  var number = window.confirm("Would you like numbers?");
  if (number){
    characterPool += numbers
    }
    //asks for special characters
  var special = window.confirm("Would you like special characters?");
  if (special){
    characterPool += specialChars
    }
  
//sets new password as an array
 var newPassword = [];

 //pushes random character from the random index the amount of times 
 //the length is
for(var i = 0 ; i < length; i++) {
 newPassword.push(randomIndex());
}

//returns the new password from above as a string instead of an array
return newPassword.join('');
}






