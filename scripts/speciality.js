const currentNumber = 0;
const numberDisplay = document.querySelector(".number1");
let lastNumberDrink = Number(window.localStorage.getItem("lastNumberDrink-ls")) || 0;
const addNumber = currentNumber + lastNumberDrink;
	
if (addNumber.toFixed(0) == '0') {
    numberDisplay.textContent = `You have not submitted any specialty drinks yet.`;
} if (diffDays.toFixed(0) =='1') {
		numberDisplay.textContent = `You have submitted ` + diffDays.toFixed(0) + ` specialty drink since your last visit.`;
} else {
		numberDisplay.textContent = `It's been ` + diffDays.toFixed(0) + ` speciality drinks since your last visit.`;
}
	
localStorage.setItem("lastNumberDrink-ls", today);