// Getting the time
export const getTime = (parent) => {
	const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	let day = new Date();
	let dayOfWeek = weekday[day.getDay()].substring(3, -1); // --> Fri
	let minute = day.getMinutes();
	minute = minute > 10 ? minute : `0${minute}`; // add 0 when less than 10m --> e.g. 02
	let hours = day.getHours();
	let amPm = hours > 11 ? "pm" : "am";
	hours = hours > 11 ? hours - 12 : hours;

	parent.innerHTML = `${dayOfWeek} ${hours}:${minute} ${amPm}`;
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
