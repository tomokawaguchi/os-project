// Getting the time
export const getTime = () => {
	const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	let day = new Date();
	let dayOfWeek = weekday[day.getDay()].substring(3, -1); // --> Fri
	let minute = day.getMinutes();
	minute = minute > 10 ? minute : `0${minute}`; // add 0 when less than 10m --> e.g. 02
	let hours = day.getHours();
	let amPm = hours > 11 ? "pm" : "am";
	hours = hours > 11 ? hours - 12 : hours === 0 ? `0${hours}` : hours;

	const timeWrapper = document.querySelector(".live-time__wrapper");
	timeWrapper.innerHTML = `${dayOfWeek} ${hours}:${minute} ${amPm}`;
};

// Creating the DOM element and attach it to the specified parent node with class name
export const createElement = (element, innerText, className, parent) => {
	const newEl = document.createElement(element);
	if (innerText) newEl.innerText = innerText;
	if (className) newEl.className = className;
	if (parent) parent.appendChild(newEl);
};

// Add/Remove/move active class
export const handleActiveClass = (elToCheck, activeClass) => {
	if (elToCheck.classList.contains(activeClass)) {
		elToCheck.classList.remove(activeClass);
	} else {
		const prevItem = document.querySelector(`.${activeClass}`);

		if (prevItem) {
			prevItem.classList.remove(activeClass);
		}

		elToCheck.classList.add(activeClass);
	}
};

// Clearing the modal details --> removing the innerHTML
export const clearModal = () => {
	const navList = document.querySelector(".nav__list");

	navList.querySelectorAll(".list-modal").forEach((each) => (each.innerHTML = ""));
};

// For HttpRequest
export const handleXMLHttpRequest = (screen_wrapper, innerFile, callback) => {
	const xml = new XMLHttpRequest();
	xml.addEventListener("load", screenRequest);
	xml.addEventListener("loadend", handleValuesScreenEvents);
	xml.open("GET", innerFile);
	xml.send();

	function screenRequest() {
		screen_wrapper.innerHTML = this.response;
	}
	function handleValuesScreenEvents() {
		if (callback) callback();
	}
};

export const handleCalender = () => {
	const allMonthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let today = new Date();
	let currentMonth = today.getMonth(); // -1
	let currentYear = today.getFullYear();

	// Update the month title
	const showcaseMonthAndYear = () => {
		const monthTitle = document.querySelector(".month-title");
		monthTitle.innerHTML = `${allMonthsArr[currentMonth]} ${currentYear}`;
	};

	// Check how many days we need from previous month and return those days in array if needed
	const checkAndRetrieveDaysBefore = () => {
		const prevNumOfDaysInMonth = new Date(currentYear, currentMonth, 0).getDate(); // e.g. 30
		const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDay(); // last day of PREVIOUS month -> return index of day -> it indicates how many days we need from the previous month (Monday is the first day)
		const priorDays = [];

		let counter = prevMonthLastDay;
		let day = prevNumOfDaysInMonth;
		if (prevMonthLastDay > 0) {
			while (counter > 0) {
				priorDays.push(day);
				day--;
				counter--;
			}
		}
		return priorDays.reverse();
	};

	// Get all the days of current months and return them in array
	const retrieveCurrentDays = () => {
		const currentNumOfDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
		const currentMonthDays = [];

		for (let i = 1; i < currentNumOfDaysInMonth + 1; i++) {
			currentMonthDays.push(i);
		}

		return currentMonthDays;
	};

	// Check how many days we need from next month and return those days in array if needed
	const checkAndRetrieveDaysAfter = () => {
		const daysFromPrevMonth = 42 - checkAndRetrieveDaysBefore().length - retrieveCurrentDays().length;
		const afterDays = [];

		let counter = daysFromPrevMonth;
		let day = 1;
		if (daysFromPrevMonth > 0) {
			while (counter > 0) {
				afterDays.push(day);
				day++;
				counter--;
			}
		}
		return afterDays;
	};

	// Combine all the days and populate it in HTML
	const populateCalender = () => {
		const allDaysArr = [checkAndRetrieveDaysBefore(), retrieveCurrentDays(), checkAndRetrieveDaysAfter()].flat(1);

		// Populate HTML elements for each day and append to parent wrapper
		allDaysArr.forEach((eachDay) => {
			const parentWrapper = document.querySelector(".days-sec");
			const div = document.createElement("div");
			div.className = "day";
			const span = document.createElement("span");
			span.className = "date";
			const textNode = document.createTextNode(eachDay);
			span.appendChild(textNode);
			div.appendChild(span);
			parentWrapper.appendChild(div);
		});
	};

	// Clear the current month (for the next update)
	const clearCurrentCalender = () => {
		const calendarWrapper = document.querySelector(".days-sec");
		calendarWrapper.innerHTML = "";
	};

	// Calling two functions - showcase the calendar month/year as well as actual days
	showcaseMonthAndYear();
	populateCalender();

	// Handle other months to showcase upon click arrows
	const decrementBtn = document.querySelector("#decrement");
	const incrementBtn = document.querySelector("#increment");
	const resetBtn = document.querySelector("#reset");

	// Reset button retrieve the today's day data and populate the calendar based on the new date details
	resetBtn.addEventListener("click", () => {
		currentMonth = today.getMonth();
		currentYear = today.getFullYear();

		showcaseMonthAndYear();
		clearCurrentCalender();
		populateCalender();
	});

	// It increments month and year(when appropriate) on each click event and then showcase the calendar accordingly
	incrementBtn.addEventListener("click", () => {
		currentMonth += 1;
		currentMonth = currentMonth === 12 ? 0 : currentMonth;
		currentYear = currentMonth === 0 ? (currentYear += 1) : currentYear;

		showcaseMonthAndYear();
		clearCurrentCalender();
		populateCalender();
	});

	// It decrement month and year(when appropriate) on each click event and then showcase the calendar accordingly
	decrementBtn.addEventListener("click", () => {
		currentMonth -= 1;
		currentMonth = currentMonth === -1 ? 11 : currentMonth;
		currentYear = currentMonth === 11 ? (currentYear -= 1) : currentYear;

		showcaseMonthAndYear();
		clearCurrentCalender();
		populateCalender();
	});
};

export const handleCalculator = () => {
	const baseButtons = document.querySelectorAll(".calc-btn");
	const equalButton = document.querySelector(".equal-btn");
	const clearButton = document.querySelector(".clear-btn");
	const positiveNegativeButton = document.querySelector(".positive-negative-btn");
	let currentFullStr = document.querySelector("#result").innerHTML;
	let typeStr = "n";

	// Check if string is ready to calculate
	const isReadyToCalc = (str) => {
		// It includes operator, the last char is number
		return /[\+\-\*\/]/g.test(str) && typeStr.slice(-1) === "n";
	};

	// Calculating the math
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

			typeStr += event.target.dataset.type;

			// For when the operator was clicked at first
			if (/[\+\*\/]/g.test(clickedValue) && currentFullStr === "0") {
				console.log("here");
				currentFullStr === "0";
				typeStr = "n";
				console.log({ currentFullStr });
				return;
			}
			// If '-' is the starting value, add it to currentFullStr accordingly
			if (clickedValue === "-" && currentFullStr === "0") {
				console.log("minus");
				currentFullStr = "-";

				typeStr = "o";
				console.log({ currentFullStr });
				return;
			}
			// No operator or decimal allowed after '-'
			if (/[\+\-\*\/\.]/g.test(clickedValue) && currentFullStr === "-") {
				typeStr = "o";
				console.log({ currentFullStr });
				return;
			}

			// For when the operator was clicked two in a row
			if (/[\+\-\*\/]/g.test(currentFullStr) && currentFullStr[0] !== "-") {
				const lastChar = clickedValue;
				const secondLastChar = currentFullStr[currentFullStr.length - 1];
				const lastTwoChars = lastChar + secondLastChar;

				if (/[\+\-\*\/]/g.test(clickedValue) && /[\+\-\*\/]/g.test(currentFullStr[currentFullStr.length - 1])) {
					if (lastTwoChars === "--") {
						currentFullStr = currentFullStr.slice(0, -1);
						currentFullStr += "+";
						console.log({ currentFullStr });
						return;
					} else if (lastTwoChars === "++") {
						currentFullStr = currentFullStr.slice(0, -1);
						currentFullStr += "+";
						return;
					} else if (lastTwoChars === "-+" || lastTwoChars === "+-") {
						currentFullStr = currentFullStr.slice(0, -1);
						currentFullStr += "-";
					} else if (lastTwoChars === "*-" || lastTwoChars === "/-") {
						currentFullStr += clickedValue;
					} else {
						typeStr = typeStr.replace("o", "");
						// Remove the last one first before adding the new one
						currentFullStr = currentFullStr.slice(0, -1);
						currentFullStr += clickedValue;
					}

					typeStr = typeStr.slice(0, -1);
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

			console.log(currentFullStr);
		});
	});

	// Handle equal
	equalButton.addEventListener("click", () => {
		console.log({ currentFullStr });
		if (isReadyToCalc(currentFullStr)) {
			const final = calculate(currentFullStr);
			updateScreen(final);
			currentFullStr = final.toString();
			typeStr = new Array(currentFullStr.length).fill("n").join("");
		}
	});

	// Handle clear - AC
	clearButton.addEventListener("click", () => {
		currentFullStr = "0";
		typeStr = "";
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
