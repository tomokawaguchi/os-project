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
