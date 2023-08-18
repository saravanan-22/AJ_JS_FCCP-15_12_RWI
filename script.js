function findRepeatedWords(paragraph) {
  let words = paragraph.toLowerCase().match(/\b\w+\b/g);

  if (!words) {
    return [];
  }

  let wordCounts = {};
  let repeatedWords = [];

  words.forEach((word) => {
    if (wordCounts[word]) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }

    if (wordCounts[word] === 2) {
      repeatedWords.push(word);
    }
  });

  return repeatedWords;
}

let checkButton = document.getElementById("check-button");
let paragraphInput = document.getElementById("paragraph-input");
let resultContainer = document.getElementById("result");

checkButton.addEventListener("click", () => {
  let paragraph = paragraphInput.value.trim();
  if (paragraph === "") {
    resultContainer.textContent = "Please enter a paragraph.";
    return;
  }

  let repeatedWords = findRepeatedWords(paragraph);
  if (repeatedWords.length > 0) {
    resultContainer.innerHTML = `Repeated words in the paragraph:<br>${repeatedWords.join(
      ", "
    )}`;
  } else {
    resultContainer.textContent = "No repeated words found in the paragraph.";
  }
});



// Function findRepeatedWords(paragraph):
// This function takes a single argument paragraph, which is expected to be a string containing the input paragraph. The purpose of this function is to find and return a list of words that are repeated within the paragraph.

// The function first converts the entire paragraph to lowercase using .toLowerCase(). This is done to ensure that words are treated case-insensitively, meaning that "Hello" and "hello" would be considered the same word.

// It then uses a regular expression (/\b\w+\b/g) with the .match() function to extract all individual words from the paragraph. The regular expression \b\w+\b matches words composed of one or more word characters (\w+) surrounded by word boundaries (\b), effectively splitting the paragraph into an array of words.

// The extracted words are stored in the words array. If no words are found (for example, if the paragraph is empty), the function returns an empty array.

// The function then initializes two objects:

// wordCounts: An object that will store the count of each word in the paragraph.
// repeatedWords: An array that will store words that are repeated.
// It then iterates through the words array using a forEach loop. For each word:

// If the wordCounts object already has an entry for the word, the count is incremented.
// If the wordCounts object does not have an entry for the word, a new entry with a count of 1 is created.
// If the count of the current word becomes 2 (meaning it's repeated), the word is added to the repeatedWords array.

// Finally, the repeatedWords array is returned, containing the list of repeated words in the paragraph.

// Event Listener:
// The code attaches an event listener to a button element with the ID check-button. This button is intended to be clicked by the user to trigger the identification of repeated words.

// When the button is clicked, the event listener's callback function is executed. Inside this function:

// The content of the input element with the ID paragraph-input is retrieved and trimmed to remove leading and trailing whitespace.
// If the trimmed paragraph is empty, a message is displayed in the element with the ID result, indicating that the user needs to enter a paragraph.
// If the paragraph is not empty, the findRepeatedWords function is called with the paragraph as an argument to obtain the list of repeated words.
// If there are repeated words, they are displayed in the resultContainer element with a line break between them.
// If no repeated words are found, a message indicating their absence is displayed in the resultContainer element.