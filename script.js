// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
var newPass = document.getElementById('newPass') 
var length = document.getElementById('length') 
var upCase = document.getElementById('upCase') 
var lowCase = document.getElementById('lowCase') 
var special = document.getElementById('special') 
var genPassButton = document.getElementById('genPassButton') 



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
 
 
 console.log(getRanUp());
 console.log(getRanLow());
 console.log(getRanNum());
 console.log(getRanSpec());
 
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
