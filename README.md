# Mock OS Project

![Project snapshot](https://github.com/tomokawaguchi/os-project/blob/main/images/fakeOS-snapshot.png?raw=true)


I have developed a mock screen of mac OS. I have setup a laptop frame with CSS and develop apps and other items inside of it. Since this is a mock laptop screen, it is optimised for the screen size of 900px and larger only.

As mac laptop behaves, on hover over the bottom of screen, the app deck will show up. Upon click each app, the respective app will open up. At the header, there are 3 layers of drop down menu available.The menu won't trigger anything, however you can navigate down to the sub-sub menu level on hover over the menu. The menu data is populated programmatically with the local data, which is stored in data.js.

For the right top corner, there are bluetooth, battery, wifi icons and current time buttons available. These icons will open up a respective modals with some details - a toggle button is the control of whether the some section below is visible or not. The current time is obtained via JavaScript and it keeps updating every 1000 ms to ensure the accurate time is being showcased.

## App 1 - Calendar

The Calendar app always opens up with the current month screen as default. On this screens, you have your live today's date indicator. Each arrow button can navigate you to the next/previous month with accurate date and year. Today button can navigate you back to your current date's month. The date data is obtained and calculated through `new Date()` and ensured to create and output the required DOM with date information. The html file of the calendar.html is injected via `new XMLHttpRequest()` method.

## App 2 - Calculator

The main math of calculator app is handled with `new Function()()` constructor so that it can conduct math operations on a string passed. Each calculator button has been set with click event listener and it has been ensured to cover the various cases. The html file of the calculator.html is injected via `new XMLHttpRequest()` method.

## App 3 - Terminal

This app is the simplest with text field, which allows you to enter the text. The size adjustment is covered to some extent within the mock mac screen/laptop. The html file of the terminal.html is injected via `new XMLHttpRequest()` method.
