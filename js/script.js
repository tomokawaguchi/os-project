import { getTime, createElement, handleActiveClass, clearModal, handleXMLHttpRequest, handleCalender, handleCalculator } from "./functions.js";
import { menuData } from "./data.js";

const appList = document.querySelector(".app-list-wrapper");
const mainScreen = document.querySelector(".main-screen");

//======================
// App List Section
//======================

// Toggling app list/group active class
appList.addEventListener("mouseover", () => {
	mainScreen.classList.add("active-app-list");
});

appList.addEventListener("mouseout", () => {
	mainScreen.classList.remove("active-app-list");
});

//======================
// Util List Section
//======================
const screenBody = document.querySelector(".mac-screen__inner");
const utilItems = document.querySelectorAll(".util-list__item");

// Live time update
// Run function every second to get the most updated time
setInterval(getTime, 100);

// Toggling util icons list active class
utilItems.forEach((item) => {
	item.addEventListener("click", (event) => {
		event.stopPropagation(); // stops the move upwards of bubbling
		const currentItem = event.target;

		// Add/Remove modal active class
		handleActiveClass(currentItem, "active-list");
	});
});

const toggleBtns = document.querySelectorAll(".toggle-btn");

toggleBtns.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		event.stopPropagation();
		event.target.closest(".list-modal").classList.toggle("toggleOn");
	});
});

//======================
// Nav List Section
//======================

const menuItems = document.querySelectorAll(".nav__list__item");

// Toggling nav list active class
menuItems.forEach((item, index) => {
	item.addEventListener("click", (event) => {
		event.stopPropagation(); // stops the move upwards of bubbling
		const currentItem = event.target;
		const parentNavIndex = index;

		// If the same button is clicked, exit
		if (currentItem.classList.contains("active-list")) return;

		// Clear all inside of the previous modal
		if (document.querySelectorAll(".list-modal").length > 0) {
			clearModal();
		}

		// Add/Remove modal active class
		handleActiveClass(currentItem, "active-list");

		// If list-modal already exists, skip creating new one
		if (!currentItem.contains(document.querySelector(".active-list .list-modal"))) {
			// create a new div for modal
			createElement("div", "", "list-modal", currentItem);
		}

		// Set up ul for the list of menu items
		const modal = currentItem.querySelector(".list-modal");
		createElement("ul", "", "list-modal__list", modal);
		const navSubmenuUl = modal.querySelector(".list-modal__list");

		// Map data to modal
		const submenuData = menuData[parentNavIndex].submenuList;
		submenuData.forEach((submenuInfo) => {
			const submenuTitle = submenuInfo.submenu;
			createElement("li", submenuTitle, "list-modal__item", navSubmenuUl);

			// const hasSubmenu = submenuInfo.hasChildren;
			// const subSumMenu = submenuInfo.subSubMenu; // obj
			// const li = document.querySelector(".list-modal__item");

			// if (hasSubmenu) {
			// 	createElement("div", "", "sub-modal", li);
			// 	const subModal = document.querySelector(".sub-modal");
			// 	createElement("ul", "", "sub-modal__list", subModal);
			// 	const subSubArr = Object.entries(subSumMenu);

			// 	subSubArr.forEach((each) => {
			// 		const secTitle = each[0];
			// 		const subSubMenusArr = each[1];
			// 	});
			// }
		});
	});
});

//======================
// Terminal Icon
//======================
const terminalApp = document.querySelector("#terminal-app-icon");

terminalApp.addEventListener("click", () => {
	handleXMLHttpRequest(document.querySelector(".app-wrapper"), "../terminal.html");
});

document.querySelector(".app-wrapper").addEventListener("click", (event) => {
	if (event.target.classList.contains("close-calendar")) {
		document.querySelector(".app-wrapper").innerHTML = "";
	}
});

//======================
// Note Icon
//======================
const noteApp = document.querySelector("#note-app-icon");

noteApp.addEventListener("click", () => {
	handleXMLHttpRequest(document.querySelector(".app-wrapper"), "../note.html");
});

// document.querySelector(".note-wrapper").addEventListener("click", (event) => {
// 	if (event.target.classList.contains("close-terminal")) {
// 		document.querySelector(".app-wrapper").innerHTML = "";
// 	}
// });

//======================
// Calendar Icon
//======================
const calendarApp = document.querySelector("#calendar-app-icon");

calendarApp.addEventListener("click", () => {
	handleXMLHttpRequest(document.querySelector(".app-wrapper"), "../calendar.html", handleCalender);
});

document.querySelector(".app-wrapper").addEventListener("click", (event) => {
	if (event.target.classList.contains("close-terminal")) {
		document.querySelector(".app-wrapper").innerHTML = "";
	}
});

//======================
// Calculator Icon
//======================
const calculatorApp = document.querySelector("#calculator-app-icon");

calculatorApp.addEventListener("click", () => {
	handleXMLHttpRequest(document.querySelector(".app-wrapper"), "../calculator.html", handleCalculator);
});

document.querySelector(".app-wrapper").addEventListener("click", (event) => {
	if (event.target.classList.contains("close-terminal")) {
		document.querySelector(".app-wrapper").innerHTML = "";
	}
});

//======================
// Global
//======================

// To let user click anywhere in the mac screen to close by removing the active class
screenBody.addEventListener("click", () => {
	const currentActiveUtilItem = document.querySelector(".active-list");
	if (currentActiveUtilItem) {
		// Clear the modal context
		clearModal();
		// Remove the active list class
		currentActiveUtilItem.classList.remove("active-list");
	}
});
