const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const output = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
  const input = userInput.value;
  if (!input) {
    alert("Please provide a phone number");
    return;
  }
  const regexOne = /^1\s\(\d\d\d\)\s\d\d\d-\d\d\d\d$/g;
  const regexTwo = /^1\s\d\d\d-\d\d\d-\d\d\d\d$/g;
  const regexThree = /^1\(\d\d\d\)\d\d\d-\d\d\d\d$/g;
  const regexFour = /^1\s\d\d\d\s\d\d\d\s\d\d\d\d$/g;
  const regexFive = /^\d\d\d\d\d\d\d\d\d\d$/g;
  const regexSix = /^\d\d\d-\d\d\d-\d\d\d\d$/g;
  const regexSeven = /^\(\d\d\d\)\d\d\d-\d\d\d\d$/g;
  regexOne.test(input) || regexTwo.test(input) || regexThree.test(input) || regexFour.test(input) || regexFive.test(input) ||
regexSix.test(input) || regexSeven.test(input) ? output.textContent = "Valid US number: " + input : output.textContent = "Invalid US number: " + input;
});

clearBtn.addEventListener("click", () => {
  output.textContent = "";
  userInput.value = "";
});