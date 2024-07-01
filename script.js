const inputTextElement = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");
resultText.style.display = "none";

function checkPressed() {
  let showString = inputTextElement.value;
  let input = inputTextElement.value.replace(/\W/g, "");
  if (input === "") {
    alert("Please input a value");
  } else if (input.length === 1 && input.match("[a-zA-Z]+")) {
    resultText.innerText = `${showString} is a palindrome`;
  } else if (isPalindrome(input) === true) {
    resultText.innerText = `${showString} is a palindrome`;
  } else {
    resultText.innerText = `${showString} is not a palindrome`;
  }
  inputTextElement.value = "";
  resultText.style.display = "block";
}

function isPalindrome(input) {
  let text = input;
  console.log("text:", text);
  let clearText = "";
  for (let i = 0; i < text.length; i++) {
    let x = text[i].replace("_" || "," || ".", "");
    clearText += x.toLowerCase();
  }

  clearText.trim();
  console.log("clearText:", clearText);
  length = clearText.length;

  for (let i = 0; i < length; i++) {
    if (clearText[i] !== clearText[length - 1 - i]) {
      console.log("not a palindrome");
      return false;
    }
  }
  console.log("palindrome");
  return true;
}

checkButton.onclick = checkPressed;
