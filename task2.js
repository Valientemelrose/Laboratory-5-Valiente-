let string1 = prompt("Enter the first string:");
let string2 = prompt("Enter the second string:");


let concatenatedString = string1 + string2;


let lengthOfString1 = string1.length;
let upperCaseString2 = string2.toUpperCase();
let lowerCaseConcatenated = concatenatedString.toLowerCase();
let substringOfConcatenated = concatenatedString.substring(1, 4); 

let interpolatedString = `${string1} and ${string2} are concatenated to form: ${concatenatedString}`;

let areEqual = (string1 === string2) ? "The strings are equal." : "The strings are not equal.";


let splitConcatenated = concatenatedString.split(" "); 

console.log("Concatenated String:", concatenatedString);
console.log("Length of String1:", lengthOfString1);
console.log("Uppercase String2:", upperCaseString2);
console.log("Lowercase Concatenated:", lowerCaseConcatenated);
console.log("Substring of Concatenated:", substringOfConcatenated);
console.log("Interpolated String:", interpolatedString);
console.log("String Comparison:", areEqual);
console.log("Split Concatenated String:", splitConcatenated);