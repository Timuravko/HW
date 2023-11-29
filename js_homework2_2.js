let userInput = prompt("Скількі вам років?");
if (!isNaN(userInput) && userInput >= 0) {
let yearsWord;
if (userInput == 1) {
yearsWord = " рік";
console.log("Вам " + userInput + yearsWord);
} else if (userInput >= 2 && userInput <= 4) {
yearsWord = " роки";
console.log("Вам " + userInput + yearsWord);
} else {
yearsWord = " років";
console.log("Вам " + userInput + yearsWord);
}
alert("Вам " + userInput + yearsWord);
} else {
alert("Введіть будь ласка позитивне число.");
}