// // Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Arrays

var specChars =  ["@", "!", "#", "$", "%", "^", "&", "*", "(", ")"];

var numbs = [1,2,3,4,5,6,7,8,9,0];

var upLet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowLet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var pwdLength = (parseInt >8 && parseInt <128);

var posChars = [];

// Generator functions

function generatePassword(){
  var password = "";
function writePassword() {
    var password = generatePassword();
}

  passwordText.value = password;

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
// Generate values
generateBtn.addEventListener("click", function(pwdLength){
  var pwdLength = prompt("How many characters would you like your password to be?");
  if (pwdLength < 8 || pwdLength > 128){ 
    return ("");
  }

  if (pwdLength > 8 && pwdLength < 128) {
    appendto (posChars);
  }
  console.log (pwdLength);

generateBtn.addEventListener("click", function(wantUpper){
var wantUpper = confirm("Would you like to use upper case letters?");
if (wantUpper === true){
  appendto (posChars);
}

generateBtn.addEventListener("click", function(wantNumbs){
var wantNumbs = confirm ("Would you like to use numbers?");
if (wantNumbs === true){
  appendto (posChars)
}

generateBtn.addEventListener("click", function(wantSpec){
var wantSpec = confirm("Would you like to use special characters?");
if (wantSpec === true){
  appendto (posChars)
}

console.log (pwdLength);
console.log (wantLower);
console.log (wantUpper);
console.log (wantNumbs);
console.log (wantSpec);



// // // // Write password to the #password input


// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
