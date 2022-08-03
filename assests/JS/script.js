// Assignment code here
function generatePassword() {
  var userinput = window.prompt("How long would you like your password to be? Please input a number between 8-128 characters.");
  if (userinput > 8 || userinput < 128){
    alert("That is not the required length, please try again!");
    return;
  }
  if (userinput = isNaN) {
    alert("That is not a number, please try again!");
    return;
  }

  console.log(userinput)
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
