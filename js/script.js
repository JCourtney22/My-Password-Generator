// Array of special characters to be included in password

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

//Declared Variables

// var results = []

var length = 0;
var choiceLower = false;
var choiceUpper = false;
var choiceNumeric = false;
var choiceSpecial = false;
var choices = [];
var password = "";



// Function to prompt user for password options

function getPasswordOptions() {
  var userChoiceLength = prompt("Please type how long you would like your password to be.");
  length = userChoiceLength;
  if (Number.NAN || length >= 10 || length <= 64); {
    alert("Please input a number between 10 and 64");
    prompt("Please type how long you would like your password to be.");
  }
  var lowerSelected = confirm("Would you like to lower case letters?");
  var upperSelected = confirm("Would you like to use upper case letters?");
  var numericSelected = confirm("Would you like to use numbers?");
  var specialSelected = confirm("Would you like to use special characters?");
  choiceLower = lowerSelected;
  choiceUpper = upperSelected;
  choiceNumeric = numericSelected;
  choiceSpecial = specialSelected;
  if (choiceLower) {
    choices.push(lowerCasedCharacters);
  } 
  if (choiceUpper) {
    choices.push(upperCasedCharacters);
  }
  if (choiceNumeric) {
    choices.push(numericCharacters);
  } 
  if (choiceSpecial) {
    choices.push(specialCharacters);
  } 
}

// Function for getting a random element from an array
function getRandom(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
  }


// Function to generate password with user input
function generatePassword() {
   for (var i =0; i < length; i++) {
    password = Math.floor(Math.random() * choices.length);
  }
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