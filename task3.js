let inputText = prompt("Enter a string of text:");
let numCharacters = inputText.length;
let wordsArray = inputText.split(" ");
let numWords = wordsArray.length;

let sentencesArray = inputText.split(/[.!?]/);

let filteredSentences = sentencesArray.filter(sentence => sentence.trim() !== "");
let numSentences = filteredSentences.length;

let wordCounts = {};
wordsArray.forEach(word => {
  
  let cleanedWord = word.replace(/[^\w\s]|_/g, "").toLowerCase();
  
  if (cleanedWord !== "") {
    wordCounts[cleanedWord] = (wordCounts[cleanedWord] || 0) + 1;
  }
});


let mostFrequentWord = "";
let maxCount = 0;
for (let word in wordCounts) {
  if (wordCounts[word] > maxCount) {
    mostFrequentWord = word;
    maxCount = wordCounts[word];
  }
}

let totalWordLength = wordsArray.reduce((total, word) => total + word.length, 0);
let averageWordLength = totalWordLength / numWords;

console.log("Input Text:", inputText);
console.log("Number of Characters:", numCharacters);
console.log("Number of Words:", numWords);
console.log("Number of Sentences:", numSentences);
console.log("Most Frequent Word:", mostFrequentWord, "(Count:", maxCount + ")");
console.log("Average Word Length:", averageWordLength.toFixed(2));