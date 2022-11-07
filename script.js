// Assignment Code
var generateBtn = document.querySelector("#generate");

var charLowerCase = `abcdefghijklmnopqrstuvwxyz`;
var charUpperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
var charNumber = `0123456789`;
var charSpecial = `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword() {
  var charList = "";
  var genPassword = "";

  // Creates prompt for user to enter required password length, returns invalid if too big, small or a non-number is entered
  passwordLength = prompt(
    `Enter password length (must be between 8 and 128 characters)`
  );



  if (passwordLength < 8 || passwordLength > 128 || typeof passwordLength != "number") {
    alert("invalid!");
    return;
  }

  //Prompts user for password parameters
  var isLowerCase = confirm(
    "Click OK if password requires lowercase characters"
  );

  if (isLowerCase) {
    charList += charLowerCase;
  }

  var isUpperCase = confirm(
    "Click OK if password requires uppercase characters"
  );

  if (isUpperCase) {
    charList += charUpperCase;
  }

  var isNumber = confirm("Click OK if password requires a number");

  if (isNumber) {
    charList += charNumber;
  }

  var isSpecial = confirm("Click OK if password requires a special character");

  if (isSpecial) {
    charList += charSpecial;
  }


  //Randomly selects approved characters for user determined length of password, returns error if no parameters selected
  for (i=0;i<passwordLength;i++){
    genPassword += charList.charAt(Math.floor(Math.random() * charList.length))
  }

  if (genPassword == ""){
    var error = "error!";
    return error;
  }

  return genPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
