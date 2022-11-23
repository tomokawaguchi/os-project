const appList = document.querySelector(".app-list-wrapper");
const mainScreen = document.querySelector(".main-screen");

// Toggling app active class
appList.addEventListener("mouseover", () => {
	mainScreen.classList.add("active-app-list");
});

appList.addEventListener("mouseout", () => {
	mainScreen.classList.remove("active-app-list");
});

// Toggling util icons list active class
const screenBody = document.querySelector(".mac-screen__inner");
const utilItems = document.querySelectorAll(".util-list__item");

utilItems.forEach((item) => {
	item.addEventListener("click", (event) => {
		event.stopPropagation(); // stops the move upwards of bubbling
		const currentItem = event.target;

		if (currentItem.classList.contains("active-util-list")) {
			currentItem.classList.remove("active-util-list");
		} else {
			const prevItem = document.querySelector(".active-util-list");

			if (prevItem) {
				prevItem.classList.remove("active-util-list");
			}

			currentItem.classList.add("active-util-list");
		}
	});
});

// To let user click anywhere in the mac screen to close
screenBody.addEventListener("click", () => {
	const currentActiveUtilItem = document.querySelector(".active-util-list");
	if (currentActiveUtilItem) {
		currentActiveUtilItem.classList.remove("active-util-list");
	}
});
