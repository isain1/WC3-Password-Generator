// Assignment code here
//This block of code defines the characters that will be available for the user to choose from
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "r", "p", "p", "q", "r", "s", "t", "v", "v", "w", "x", "y", "z"];
let UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

//When called this function generates and displays the generated password
function generatePassword() {
  let length = window.prompt("How many characters would you like you password to be. Please select a value in between 8 and 128.");

  while (isNaN(length) || length < 8 || length > 128) {
    length = window.prompt("Error. Please enter a whole number in between 8 and 128");
  } //The lines above ask the user for their desired password length and validates to make sure that their input is valid.
  
  let lower = window.confirm("would you like your password to include lowercase letters?");
  let upper = window.confirm("would you like your password to include uppercase letters?");
  let includeNumbers = window.confirm("would you like your password to include numbers?");
  let special = window.confirm("would you like your password to include special characters?");
  //The block above asks the user which of the different types of characters they would like to be included in their password.

  while (!lower && !upper && !includeNumbers && !special) {
    window.alert("Error. Yow must select at least one of the options");
    lower = window.confirm("would you like your password to include lowercase letters?");
    upper = window.confirm("would you like your password to include uppercase letters?");
    includeNumbers = window.confirm("would you like your password to include numbers?");
    special = window.confirm("would you like your password to include special characters?");
  }
  //The block above makes sure that the user has selected at least one of the options for the password.
  
  let selections = []
  if (lower) {
    selections = selections.concat(lowerCase);
  };
  if (upper) {
    selections = selections.concat(UpperCase);
  };
  if (includeNumbers) {
    selections = selections.concat(numbers);
  };
  if (special) {
    selections = selections.concat(specialCharacters);
  };
  //The block of if statements above creates an array containing all of the different characters that the user wants in their password. 

  let passwordArray = []; //Empty array that will then be populated by the characters of the generated password
  
  for (i=0; i < length; i++) {
    passwordArray.push(selections[Math.floor(Math.random() * selections.length)])
  } //For loop that takes the user's desired password length and then takes thet many random characters from their desired options and puts them in the empty password array.
  let generatedPassword = passwordArray.join(''); //Takes the passwordArray and converts it to string.
  
  return window.alert(`Your password is: ${generatedPassword}`);  //Displays the genarated password in a window box.
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
