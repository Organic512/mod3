function generatePassword() {

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+-=[]{}|;:'\",.<>/?";

  var passwordLength = 0;
  var includeLowercase = false;
  var includeUppercase = false;
  var includeNumeric = false;
  var includeSpecialChars = false;

  while (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Enter the password length (between 8 and 128 characters):");
  }

  includeLowercase = confirm("Include lowercase characters?");
  includeUppercase = confirm("Include uppercase characters?");
  includeNumeric = confirm("Include numeric characters?");
  includeSpecialChars = confirm("Include special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecialChars) {
    alert("You must select at least one character type.");
    return "";
  }

  var availableChars = "";
  if (includeLowercase) availableChars += lowercaseChars;
  if (includeUppercase) availableChars += uppercaseChars;
  if (includeNumeric) availableChars += numericChars;
  if (includeSpecialChars) availableChars += specialChars;

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars.charAt(randomIndex);
  }

  return password;
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
