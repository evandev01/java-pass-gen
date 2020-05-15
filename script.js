// // Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// arrays
var specChars =  ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "<", ">", ",", ".", "/", "?", "|"];

var numbs = [1,2,3,4,5,6,7,8,9,0];

var upLet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowLet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var posChars=[]
var neededChars=[]
var finalPass=[]

function writePassword(event){
  event.preventDefault()
    var password = generatePassword(); 
    passwordText.value = password
}   
// Generator functions

  function generatePassword(){
    
    var passwordLength = prompt("How long do you want the password to be?");
      
        if (passwordLength < 8 || passwordLength > 128){
        alert ("Please enter a number between 8 - 128.")
      }
        else 
        {
          var wantLower = confirm("Would you like to use lower case letters?");
          var wantUpper = confirm("Would you like to use upper case latters?");
          var wantNumbers = confirm("Would you like to use numbers?");
          var wantSpec = confirm("Would you like to use special characters?");

          //conditionals
          if (wantLower){
            posChars = posChars.concat(lowLet)
            generateRandomLowerCase()
          }
          if(wantUpper){
            posChars=posChars.concat(upLet)
            generateRandomUpperCase()
          }

          if(wantNumbers){
            posChars=posChars.concat(numbs)
            generateRandomNumber()
          }

          if(wantSpec){
            posChars=posChars.concat(specChars)
            generateRandomSpecialChar()
          }

          console.log(posChars);


          //generate a random character from the array of needed characters

          for(var i =0;i<passwordLength;i++ ){
            var randomCharacter= posChars[Math.floor(Math.random()*posChars.length)]

            finalPass.push(randomCharacter)      
             }

          for(var j =0;j<neededChars.length;j++){

              finalPass[j]=neededChars[j]
             }

let final=finalPass.join("")
return final
            }   } 

  function generateRandomUpperCase() {
    var randomItem = upLet[Math.floor(Math.random()*upLet.length)]
    neededChars.push(randomItem) 
  }

  function generateRandomLowerCase() {
    let randomItem = lowLet[Math.floor(Math.random()*lowLet.length)]
    neededChars.push(randomItem)

  }

  function generateRandomSpecialChar() {
    let randomItem = specChars[Math.floor(Math.random()*specChars.length)]
    neededChars.push(randomItem)
  }

  function generateRandomNumber() {
    let randomItem = numbs[Math.floor(Math.random()*numbs.length)]
    neededChars.push(randomItem)
  }
  

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);