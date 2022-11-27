// Array of special characters to be included in password



var results = []

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
//This only goes back through to the first prompt once.
function getPasswordOptions() {
  var x = parseInt(prompt("Please type how long you would like your password to be."));
  if (Number.NAN || x <= 10 || x >= 64); {
    alert("Please input a number between 10 and 64");
    var x = parseInt(prompt("Please type how long you would like your password to be."), 10);
  }
  confirm("Would you like to lower case letters?");
  confirm("Would you like to use upper case letters?");
  confirm("Would you like to use numbers?");
  confirm("Would you like to use special characters?");
}

// Function for getting a random element from an array
function getRandom(numericCharacters) {
  for (var i = 0; i < numericCharacters.length; i++) {
    return numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
  }
}

getRandom(numericCharacters)

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var password = getPasswordOptions();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);