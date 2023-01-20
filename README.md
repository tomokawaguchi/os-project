# Mock OS Project

:link:  https://macos.tomok.dev/

<img src="https://github.com/tomokawaguchi/os-project/blob/main/images/fakeOS-snapshot.png" width="auto" height="400" />

## Project Brief
### Aims
The goal of this project is to explore and consolidate my understandings of HTML, CSS and JavaScript. This project required to replicate the layout and format of a design/image using CSS, add content via HTML and control the interactive elements via JavaScript.


### MVP (conducted as Nology course work)

The design is going to be that of an operating system.
Please look at the provided image gallery for examples. You should choose either a portrait (mobile) or landscape (desktop) operating system, you are not expected to create a responsive page that works on both, however it should look good on the chosen orientation at different resolutions/ratios. You will select one of the provided images, or your own as approved by a coach.

**Features**

- You will be creating an SPA (Single Page Application)
- Desktop has a wallpaper that fits the viewport
- There will be selectable icons
- Selecting an icon will open an "app", creating a modal to display some content
- Able to close an app
- There will be a selectable menu
- Selecting the menu will display a list of text and icons
- The current time is displayed somewhere

**HTML/SCSS**

- Wallpaper scales to fit the viewport
- Minimum 3 icons on desktop
- The menu is positioned in the appropriate place (bottom left on windows, top of the screen on android)
- Apps look consistent
- Menu contains a flex with content inside it
- Apps should be able to contain text, an image or a form

**JavaScript**

- Put your js code into separate files
- Your icons and menu should add event listener for the click event, don't use the html onclick attribute
- Give your functions and variables good names
- Use the arrow syntax to declare functions

**Other**

- Split your js logic/data modules from your js DOM modules
- Look at the position css property, specifically fixed and absolute
- Pay attention to your hierarchy of elements in your html
- Create your modals using JS and DOM interaction
- Make your life easy! You don't need to recreate everything, just do the features and mvp mentioned above

## Technical Implementation
I have developed a mock screen of mac OS. I have setup a laptop frame with CSS and develop apps and other items inside of it. Since this is a mock laptop screen, it is optimised for the screen size of 900px and larger only.

As mac laptop behaves, on hover over the bottom of screen, the app deck will show up. Upon click each app, the respective app will open up. At the header, there are 3 layers of drop down menu available.The menu won't trigger anything, however you can navigate down to the sub-sub menu level on hover over the menu. The menu data is populated programmatically with the local data, which is stored in data.js.

For the right top corner, there are bluetooth, battery, wifi icons and current time buttons available. These icons will open up a respective modals with some details - a toggle button is the control of whether the some section below is visible or not. The current time is obtained via JavaScript and it keeps updating every 1000 ms to ensure the accurate time is being showcased.


**1. Calendar App**

The Calendar app always opens up with the current month screen as default. On this screens, you have your live today's date indicator. Each arrow button can navigate you to the next/previous month with accurate date and year. Today button can navigate you back to your current date's month. The date data is obtained and calculated through `new Date()` and ensured to create and output the required DOM with date information. The html file of the calendar.html is injected via `new XMLHttpRequest()` method.

**2. Calculator App**

The main math of calculator app is handled with `new Function()()` constructor so that it can conduct math operations on a string passed. Each calculator button has been set with click event listener and it has been ensured to cover the various cases. The html file of the calculator.html is injected via `new XMLHttpRequest()` method.

**3. Terminal App**

This app is the simplest with text field, which allows you to enter the text. The size adjustment is covered to some extent within the mock mac screen/laptop. The html file of the terminal.html is injected via `new XMLHttpRequest()` method.



## Refection

- I have learnt the importance of time management especially when you have limited time given for the project. Since the MVP was to build minimum 3 apps on the OS, I initally planned to do 5. As a result, I only was able to complete as I took some time to implement the Calculator App. It was good eye opener to know your capability well and approach solutions/projects to meet your requirements on time rather than trying to do more then it's required.

- Calender app provided me with a chance to explore `Date()` class, which I didn't have previously. It made me confused with different index base (e.g.`getMonth()`) but I have managed to achieve the functionality. 


## Future Goals

- It would be great for me to try out Calculator app with my own logic to handle math operation. 

