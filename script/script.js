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
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChars = lowerCaseChars.toUpperCase();
var numbers = "1234567890";
var specialChars = "`~!@#$%^&*()_-+=;:/?.,><";
var characterPool = ""
var Length;

//Here is where I have the java to ask the user all the questions
//for their password
var generatePassword = function() {

var length = window.prompt("Enter a number between 8 and 128:");
if (length<8) {
  return;
}
  var lower = window.confirm("Would you like lowercase letters?");
  if (lower){
  characterPool += lowerCaseChars
  }
  var upper = window.confirm("Would you like uppercase letters?");
  if (upper){
    characterPool += upperCaseChars
    }
  var number = window.confirm("Would you like numbers?");
  if (number){
    characterPool += numbers
    }
  var special = window.confirm("Would you like special characters?");
  if (special){
    characterPool += specialChars
    }
characterPool.length

     console.log(characterPool);

function randomIndex(maxLength) {
  return Math.floor(Math.random() * maxLength);
}

var newPassword = "";

for(var i = 0 ; i < Length; i++) {
 newPassword += characterPool.charAt(randomIndex());
}


 return newPassword;
}




