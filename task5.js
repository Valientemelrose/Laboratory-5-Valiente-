
const inputString = prompt("Enter a string to encrypt:");
const shift = 3;


const encrypt = (text, shift) => {
 let encrypted = "";
 for (const char of text) {
   const base = char.charCodeAt(0);
   let shifted = base + shift;


   if (char.match(/[a-z]/i)) { 
     const alphabetSize = 26;


     shifted = ((shifted - 97 + alphabetSize) % alphabetSize) + 97; 
   }
   encrypted += String.fromCharCode(shifted);
 }
 return encrypted;
};

const decrypt = (text, shift) => {
 return encrypt(text, -shift); 
};


const encrypted = encrypt(inputString, shift);
console.log("Encrypted string:", encrypted);


const decryptChoice = prompt("Would you like to decrypt the string? (yes/no)");
if (decryptChoice.toLowerCase() === "yes") {
 const decrypted = decrypt(encrypted, shift);
 console.log("Decrypted string:", decrypted);
}
