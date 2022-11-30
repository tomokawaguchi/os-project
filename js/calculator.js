export const handleCalculator = () => {
	const baseButtons = document.querySelectorAll(".calc-btn");
	const equalButton = document.querySelector(".equal-btn");
	const clearButton = document.querySelector(".clear-btn");
	const positiveNegativeButton = document.querySelector(".positive-negative-btn");
	let currentFullStr = document.querySelector("#result").innerHTML;

	// Check if string is ready to calculate
	const isReadyToCalc = (str) => {
		// It includes operator, the last char is number
		return /[\+\-\*\/]/g.test(str) && /[0-9]/g.test(str.charAt(str.length - 1));
	};

	// Calculating the math with string values
	const calculate = (str) => {
		return new Function(`return ${str}`)();
	};

	// Update the result screen on the browser
	const updateScreen = (str) => {
		const resultScreen = document.querySelector("#result");
		resultScreen.innerHTML = str;
	};

	// Handle all the numbers, operators(+, -, /, *) and decimal .
	baseButtons.forEach((baseButton) => {
		baseButton.addEventListener("click", (event) => {
			const clickedValue = event.target.dataset.value;

			// Initial value is 0 --> if number > 0 is entered starting value, it removes 0
			if (/[0-9]/g.test(clickedValue) && currentFullStr === "0") {
				currentFullStr = clickedValue;
				updateScreen(currentFullStr);
				return;
			}

			// For when the operator was clicked at first
			if (/[\+\*\/]/g.test(clickedValue) && currentFullStr === "0") {
				currentFullStr === "0";

				return;
			}
			// If '-' is the starting value, add it to currentFullStr accordingly
			if (clickedValue === "-" && currentFullStr === "0") {
				currentFullStr = "-";

				return;
			}
			// No operator or decimal allowed after '-'
			if (/[\+\-\*\/]/g.test(clickedValue) && currentFullStr === "-") {
				return;
			}

			// For when the operator was clicked two in a row
			if (/[\+\-\*\/]/g.test(currentFullStr) && currentFullStr[0] !== "-") {
				const lastChar = clickedValue;
				const secondLastChar = currentFullStr[currentFullStr.length - 1];
				const lastTwoChars = secondLastChar + lastChar;

				// Current and last char in currentFullStr are both operat
				if (/[\+\-\*\/]/g.test(clickedValue) && /[\+\-\*\/]/g.test(currentFullStr[currentFullStr.length - 1])) {
					if (lastTwoChars === "--") {
						currentFullStr = currentFullStr.slice(0, -1);
						currentFullStr += "+";
					} else if (lastTwoChars === "*-" || lastTwoChars === "/-") {
						currentFullStr += clickedValue;
					} else {
						// Remove the last one first before adding the new one
						currentFullStr = currentFullStr.slice(0, -1);
						currentFullStr += clickedValue;
					}
					return;
				}
			}

			currentFullStr += clickedValue;

			// Left side of number only exist without operator
			if (event.target.dataset.type === "n") {
				updateScreen(currentFullStr);
			}

			// Right side of the number is populated
			if (event.target.dataset.type === "n" && /[\+\-\*\/]/g.test(currentFullStr)) {
				// Keep track of operator's index for showcasing the most right side of number
				const indexOfOperatorArr = [];
				currentFullStr.split("").forEach((each, index) => {
					if (/[\+\-\*\/]/g.exec(each)) indexOfOperatorArr.push(index);
				});
				let index = indexOfOperatorArr.length == 1 ? indexOfOperatorArr[0] : indexOfOperatorArr[indexOfOperatorArr.length - 1];

				const rightSide = currentFullStr.substring(index + 1);

				updateScreen(rightSide);
			}
		});
	});

	// Handle equal
	equalButton.addEventListener("click", () => {
		if (isReadyToCalc(currentFullStr)) {
			const final = calculate(currentFullStr);
			updateScreen(final);
			currentFullStr = final.toString();
		}
	});

	// Handle clear - AC
	clearButton.addEventListener("click", () => {
		currentFullStr = "0";
		updateScreen(currentFullStr);
	});

	// Handle positive/negative converter
	positiveNegativeButton.addEventListener("click", () => {
		if (!isNaN(currentFullStr.charAt(currentFullStr.length - 1))) {
			const reversed = currentFullStr.split("").reverse();
			const indexOfFirstOperatorArr = [];
			reversed.forEach((each, index) => {
				if (/[\+\-\*\/]/g.exec(each)) indexOfFirstOperatorArr.push(index);
			});
			let numStrToConvert = reversed.slice(0, indexOfFirstOperatorArr[0]).reverse().join("");

			const strLength = numStrToConvert.length;
			numStrToConvert = parseFloat(numStrToConvert) * -1;
			currentFullStr = currentFullStr
				.split("")
				.splice(0, currentFullStr.length - strLength)
				.join("");
			currentFullStr += numStrToConvert;
			currentFullStr = /[\--]/g.test(currentFullStr) ? currentFullStr.replace("--", "+") : currentFullStr;
		}
	});
};
