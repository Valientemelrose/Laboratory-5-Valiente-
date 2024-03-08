let password = prompt("Enter your password:");

const minLength = 8;
const maxLength = 20;
const minUppercase = 1;
const minLowercase = 1;
const minNumbers = 1;
const minSpecialChars = 1;

let lengthFeedback = "";
if (password.length < minLength) {
  lengthFeedback = "Password is too short.";
} else if (password.length > maxLength) {
  lengthFeedback = "Password is too long.";
} else {
  lengthFeedback = "Password length is good.";
}

let uppercaseChars = /[A-Z]/g;
let lowercaseChars = /[a-z]/g;
let numberChars = /[0-9]/g;
let specialChars = /[^A-Za-z0-9]/g;

let hasUppercase = password.match(uppercaseChars);
let hasLowercase = password.match(lowercaseChars);
let hasNumbers = password.match(numberChars);
let hasSpecialChars = password.match(specialChars);

let strengthRating = 0;
if (password.length >= minLength && password.length <= maxLength) {
  strengthRating++;
}
if (hasUppercase) {
  strengthRating++;
}
if (hasLowercase) {
  strengthRating++;
}
if (hasNumbers) {
  strengthRating++;
}
if (hasSpecialChars) {
  strengthRating++;
}

let feedbackMessage = "";
switch (strengthRating) {
  case 1:
    feedbackMessage = "Weak password.";
    break;
  case 2:
    feedbackMessage = "Moderate password.";
    break;
  case 3:
    feedbackMessage = "Good password.";
    break;
  case 4:
    feedbackMessage = "Strong password.";
    break;
  case 5:
    feedbackMessage = "Very strong password.";
    break;
  default:
    feedbackMessage = "Invalid password.";
}

console.log("Password:", password);
console.log("Length Feedback:", lengthFeedback);
console.log("Has Uppercase Letters:", hasUppercase ? "Yes" : "No");
console.log("Has Lowercase Letters:", hasLowercase ? "Yes" : "No");
console.log("Has Numbers:", hasNumbers ? "Yes" : "No");
console.log("Has Special Characters:", hasSpecialChars ? "Yes" : "No");
console.log("Strength Rating:", strengthRating);
console.log("Feedback:", feedbackMessage);