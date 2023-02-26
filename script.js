const flashcards = [
  {
    question: "What is the capital of France?",
    answer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter"
  },
  {
    question: "What is the tallest mountain in the world?",
    answer: "Mount Everest"
  }
];

let currentFlashcardIndex = 0;

function displayFlashcard(flashcard) {
  const questionEl = document.getElementById("flashcard-question");
  const answerEl = document.getElementById("flashcard-answer");

  questionEl.innerText = flashcard.question;
  answerEl.innerText = flashcard.answer;
  answerEl.style.display = "none";

  questionEl.addEventListener("click", () => {
    answerEl.style.display = "block";
  });
}

function shuffleFlashcards() {
  for (let i = flashcards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
  }
}

function handleNextFlashcard() {
  currentFlashcardIndex++;
  if (currentFlashcardIndex >= flashcards.length) {
    currentFlashcardIndex = 0;
  }
  displayFlashcard(flashcards[currentFlashcardIndex]);
}

shuffleFlashcards();
displayFlashcard(flashcards[currentFlashcardIndex]);
document.getElementById("next-flashcard").addEventListener("click", handleNextFlashcard);