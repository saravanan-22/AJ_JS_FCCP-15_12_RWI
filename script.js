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
