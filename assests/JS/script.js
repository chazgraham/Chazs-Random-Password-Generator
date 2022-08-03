// Assignment code here
function generatePassword() {
  var userinput = window.prompt("How long would you like your password to be? Please input a number between 8-128 characters.");
  if (userinput < 8 || userinput > 128){
    alert("That is not the required length, please try again!");
    return;
  }
  if (isNaN(userinput)) {
    alert("That is not a number, please try again!");
    return;
  }
  var passwordLength = Number(userinput);
  console.log(passwordLength);

  var numbers = window.confirm("Would you like your password to include numbers?");
  var symbols = window.confirm("Would you like your password to include symbols?");
  var lowerCase = window.confirm("Would you like your password to include lowercase letters?");
  var upperCase = window.confirm("Would you like your password to include uppercase letters?");
  
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8 ", "9"];
  var symbolsList = ["!", "@", "#", "$", "%", "?", "&", "*"];
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var combinedCharacterType = [];

  if (numbers == true) {
    combinedCharacterType.push(numberList);
  }
  if (symbols == true) {
    combinedCharacterType.push(symbolsList);
  }
  if (lowerCase == true) {
    combinedCharacterType.push(lowercaseList);
  }
  if (upperCase == true) {
    combinedCharacterType.push(uppercaseList)
  }
  if (combinedCharacterType.length == 0) {
    alert("Please slect 1 or more character options!");
  }

 var getRandomItem = combinedCharacterType[Math.floor(Math.random()* combinedCharacterType.length)];
 console.log(getRandomItem);
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
