// The only function needed

function generatePassword() {
  // define variables
  var charset = "";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specChar = "!#$%&()*+,-./:;<=>?@[^_`{|}~";
  var length = prompt("How many digits would you like in your password?");
  // parameters
  if (length < 8) {
    alert("That's not enough for a secure password 😑");
    return;
  } else if (length > 128) {
    alert("That's WAY too many for a password.... 🙄");
    return;
  }
  if (window.confirm("Would you like UPPERCASE letters in your password?")) {
    var charset = charset.concat(upperCase);
  } 
  if (window.confirm("Would you like lowercase letters in your password?")) {
    var charset = charset.concat(lowerCase);
  }
  if (window.confirm("Would you like numbers in your password?")) {
    var charset = charset.concat(numbers);
  }
  if (window.confirm("Would you like special characters in your password?")) {
    var charset = charset.concat(specChar);
  }
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
};
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