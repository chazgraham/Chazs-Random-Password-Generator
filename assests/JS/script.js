// Assignment code here
function generatePassword() {
  var userinput = window.prompt("How long would you like your password to be? Please input a number between 8-128 characters.");
  // alerts the user that their choice was within the length parameters
  if (userinput < 8 || userinput > 128){
    alert("That is not the required length, please try again!");
    return;
  }
  // alerts the user they did not enter a character with a numerical value
  if (isNaN(userinput)) {
    alert("That is not a number, please try again!");
    return;
  }
  // turns the users input into a numerical value
  var passwordLength = Number(userinput);

  // allows the user to select what characters they want in their password
  var numbers = window.confirm("Would you like your password to include numbers?");
  var symbols = window.confirm("Would you like your password to include symbols?");
  var lowerCase = window.confirm("Would you like your password to include lowercase letters?");
  var upperCase = window.confirm("Would you like your password to include uppercase letters?");
  
  // arrays of the list of characters that fit with the prompts above 
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8 ", "9"];
  var symbolsList = ["!", "@", "#", "$", "%", "?", "&", "*"];
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // all user selected character arrays are combined here
  var combinedCharacterType = [];

  // each is added to the combined array when the user selects them from the prompt
  if (numbers == true) {
    combinedCharacterType = combinedCharacterType.concat(numberList);
  }
  if (symbols == true) {
    combinedCharacterType = combinedCharacterType.concat(symbolsList);
  }
  if (lowerCase == true) {
    combinedCharacterType = combinedCharacterType.concat(lowercaseList);
  }
  if (upperCase == true) {
    combinedCharacterType = combinedCharacterType.concat(uppercaseList)
  }
  // makes the user select at least 1 character type
  if (combinedCharacterType.length == 0) {
    alert("Please slect 1 or more character options!");
  }

  // pulls a random character from my combined list looped the amount of times by the length of the users input
  var arrayShuffle = function(possibleCharacters) {
    var passwordArray = [];
    for(i = 0; i < passwordLength; i++) {
      let randomItem = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]; 
      passwordArray.push(randomItem);
    };
      // sends the array and joins the characters without a space
      return passwordArray.join("");
  }

  var genPassword = arrayShuffle(combinedCharacterType);

  // sends new password 
  return genPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
