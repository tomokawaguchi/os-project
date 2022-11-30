export const menuData = [
	{
		name: "home",
		submenuList: [
			{
				submenu: "About This Mac",
			},
			{
				submenu: "System Settings...",
			},
			{
				submenu: "App Store...",
			},
			{
				submenu: "Recent Items",
				hasChildren: true,
				subSubMenu: ["Calender", "Notes", "Calculator"],
			},
			{
				submenu: "Force Quit",
			},
			{
				submenu: "Sleep",
			},
			{
				submenu: "Restart...",
			},
			{
				submenu: "Shut Down...",
			},
			{
				submenu: "Lock Screen",
			},
			{
				submenu: "Log Out Tomo",
			},
		],
	},
	{
		name: "Code",
		submenuList: [
			{
				submenu: "About Visual Studio Code",
			},
			{
				submenu: "Restart to Update",
			},
			{
				submenu: "Preference",
				hasChildren: true,
				subSubMenu: ["Settings", "Online Services Settings", "Telementry Settings", "Extensions"],
			},
			{
				submenu: "Services",
				hasChildren: true,
				subSubMenu: ["No services apply", "Services Settings..."],
			},
			{
				submenu: "Hide Visual Studio Code",
			},
			{
				submenu: "Hide Others",
			},
			{
				submenu: "Show All",
			},
			{
				submenu: "Quit Visual Studio Code",
			},
		],
	},
	{
		name: "File",
		submenuList: [
			{
				submenu: "New Text File",
			},
			{
				submenu: "New File...",
			},
			{
				submenu: "New Window",
			},
			{
				submenu: "Open",
			},
			{
				submenu: "Open Folder",
			},
			{
				submenu: "Open Recent",
				hasChildren: true,
				subSubMenu: [
					"Reopen closed editor",
					"~Document/Nology/Poland/classes/w4day1",
					"~Document/Nology/Poland/classes/w3day5",
					"~Document/Nology/Poland/classes/w3day4",
					"~Document/Nology/Poland/classes/w3day3",
					"More...",
					"Clear recently opened",
				],
			},
			{
				submenu: "Save",
			},
			{
				submenu: "Save As...",
			},
			{
				submenu: "Save All",
			},
			{
				submenu: "Share",
				hasChildren: true,
				subSubMenu: ["Email Link", "Messages", "AirDrop", "Notes"],
			},
			{
				submenu: "Auto Save",
			},
		],
	},
];
