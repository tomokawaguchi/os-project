export const menuData = [
	{
		name: "home",
		submenuList: [
			{
				submenu: "About This Mac",
				hasChildren: false,
				subSubMenu: [],
			},
			{
				submenu: "System Settings...",
				hasChildren: false,
				subSubMenu: [],
			},
			{
				submenu: "App Store...",
				hasChildren: false,
				subSubMenu: [],
			},
			{
				submenu: "Recent Items",
				hasChildren: true,
				subSubMenu: {
					applications: ["Calender", "Notes", "Calculator"],
					documents: ["Nology", "JS Challenges", "Codewar"],
					noTitle: ["Clear Menu"],
				},
			},
			{
				submenu: "Force Quit",
				hasChildren: false,
				subSubMenu: [],
			},
			{
				submenu: "Sleep",
				hasChildren: false,
				subSubMenu: [],
			},
			{
				submenu: "Restart...",
				hasChildren: false,
				subSubMenu: [],
			},
			{
				submenu: "Shut Down...",
				hasChildren: false,
				subSubMenu: [],
			},
			{
				submenu: "Lock Screen",
				hasChildren: false,
				subSubMenu: [],
			},
			{
				submenu: "Log Out Tomo",
				hasChildren: false,
				subSubMenu: [],
			},
		],
	},
	{
		name: "Code",
		submenuList: [
			{
				submenu: "About Visual Studio Code",
				hasChildren: false,
				subSubMenu: [],
			},
			{
				submenu: "Restart to Update",
				hasChildren: false,
				subSubMenu: [],
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
				hasChildren: false,
				subSubMenu: [],
			},
			{
				submenu: "Hide Others",
				hasChildren: false,
				subSubMenu: [],
			},
			{
				submenu: "Show All",
				hasChildren: false,
				subSubMenu: [],
			},
			{
				submenu: "Quit Visual Studio Code",
				hasChildren: false,
				subSubMenu: [],
			},
		],
	},
];
