const template = {
	title: '', 
	dates: '',
	media: '', 
	description: ['', ''], 
	skills: ['', ''], 
	linkLables: [''],
	links: ['']
};

const projects = [moon, room, rrr, ar, senserator, heart, vr, topo, contact, emily, dice, jeopardy];



const moon = {
	title: 'VR Moon Trip', 
	dates: 'Jan. 2024 - Present',
	media: '', 
	description: ['A Unity project for CAP 6119: Advanced VR.', ''], 
	skills: ['Unity', 'C#', 'XR Interaction Toolkit'], 
	linkLables: ['Video'],
	links: ['']
};

const room = {
	title: 'VR Escape Room', 
	dates: 'Jan. 2024 - Present',
	media: '', 
	description: ['A group project with 5 people for CAP 6117: Mixed Reality Project.', 'Includes 4 different puzzles for the user to solve.', 'Worked on environment and puzzle integration.'], 
	skills: ['Unity', 'C#', 'XR Interaction Toolkit', 'Blender'], 
	linkLables: ['Playlist', 'Github'],
	links: ['https://www.youtube.com/playlist?list=PLLAatflC7TYJv_3qfoBEn0L07dqsGpFvv', 'https://github.com/GabyShamblin/Escape-Room']
};

const rrr = {
	title: 'Thunderstorm Simulation', 
	dates: 'Aug. - Dec. 2023',
	media: './public/thumbnails/rain-project.png', 
	description: ['A project created for CAP 5727: Realistic Realtime Rendering.', 'Designed to mimic a real-world thunderstorm using Unreal Engine 5\'s Blueprints, Niagara particle system , and Lumen.'], 
	skills: ['Unreal Engine 5'], 
	linkLables: ['Video', 'Github'],
	links: ['https://youtu.be/mS35nARSo88?si=TscXleuAKQbuq2yM', 'https://github.com/GabyShamblin/Realtime-Rendering']
};

const ar = {
	title: 'Augmented Reality Engineering', 
	dates: 'Aug. - Dec. 2023',
	media: './public/thumbnails/ar-thumb.png', 
	description: ['Unity projects on different topics created for CAP 6110: Augmented Reality Engineering.', 'Topics include tracking, visual coherence, situated visualization, interaction, navigation, and collaboration.'], 
	skills: ['Unity', 'C#', 'Vuforia'], 
	linkLables: ['Playlist'],
	links: ['https://youtube.com/playlist?list=PLLAatflC7TYIysXY9DPVkXql6H-apHFQX&si=1AAebMOP9ndXdGL_']
};

const senserator = {
	title: 'SenseRator', 
	dates: 'Feb. - Dec. 2023',
	media: './public/thumbnails/senserator-thumb.jpg', 
	description: ['A group of 5 people for Senior Design.', 'Uses lidar and a camera to capture the environment.', 'Performs object detection and semantic segmentation on camera data and displays output to the user on a custom interface.'], 
	skills: ['Python', 'PySimpleGUI', 'Open3D'], 
	linkLables: ['Video'],
	links: ['https://youtu.be/rFd1qQmFYQ0?si=wPxdY7MrYtnJDtDm']
};

const heart = {
	title: 'Heart Visualization Tool', 
	dates: 'May 2023',
	media: './public/thumbnails/heart.jpg', 
	description: ['Heart visualization including labels for different parts of the human heart.', 'Allows user to click through labels, start and stop animation, rotate around subject, and zoom in and out.', 'Made following LinkedIn Learning tutorial by Alan Thorn'], 
	skills: ['Unity, C#'], 
	linkLables: ['Try it for Windows', 'Try it for Mac', 'Tutorial'],
	links: ['./public/HeartWin64.zip', './public/HeartMac.zip', 'https://www.linkedin.com/learning-login/share?account=57691257&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Funity-medical-visualization-01-preparation-and-design%3Ftrk%3Dshare_ent_url%26shareId%3DH7coBLC%252BRO%252BbCMm3BaxMFA%253D%253D']
};

const vr = {
	title: 'Virtual Reality Engineering', 
	dates: 'Jan. - Apr. 2023',
	media: './public/thumbnails/vr-thumb.png', 
	description: ['Unity projects on different topics created for CAP 5115: Virtual Reality Engineering.', 'Topics include virtual environments, traveling, interactions, pyhsics, animations, and user interactions.'], 
	skills: ['Unity', 'C#', 'SteamVR'], 
	linkLables: ['Playlist'],
	links: ['https://youtube.com/playlist?list=PLLAatflC7TYJVc8Mac2dU3t1P8UZq8pqR']
};

const topo = {
	title: 'Top of the Schedule', 
	dates: 'Feb. - Apr. 2022',
	media: './public/thumbnails/scheduler.jpg', 
	description: ['A group prject with 7 people for COP 4311.', 'Allows users to create a college career schedule for the UCF Computer Science undergraduate program.', 'Uses an algorithm based on the importance of classes to create the schedule.'], 
	skills: ['React', 'MaterialUI', 'JavaScript', 'ExpressJS', 'Mongoose', 'MongoDB'], 
	linkLables: ['Presentation'],
	links: ['./public/Group 1 TOTS Presentation.pdf']
};

const contact = {
	title: 'Knight\'s Contact Manager', 
	dates: 'Feb. 2022',
	media: './public/thumbnails/contactManager.jpg', 
	description: ['A group project with 4 people for COP 4311.', 'Users can login or register an account.', 'Allows logged in user to create, search, update, and delete contacts.'], 
	skills: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'SQL'], 
	linkLables: ['Presentation'],
	links: ['./public/Gabriela Shamblin resume/pdf']
};

const emily = {
	title: 'emilygrayauthor.com', 
	dates: 'Dec. 2021 - Present',
	media: './public/thumbnails/grayWebsite.jpg', 
	description: ['Creation and maintenance of a website for a bestselling author.'], 
	skills: ['HTML', 'CSS'], 
	linkLables: ['Website'],
	links: ['https://emilygrayauthor.com/']
};

const dice = {
	title: 'Liar\'s Dice Game', 
	dates: 'Nov. 2021',
	media: './public/thumbnails/diceGame.jpg', 
	description: ['A group project with 4 people for KnightHacks 2021.', 'Worked on JavaScript for the base game rules.', 'Includes a game log to keep track of player\'s guesses and tally scores.'], 
	skills: ['HTML', 'CSS', 'JavaScript'], 
	linkLables: ['Hackathon Page'],
	links: ['https://devpost.com/software/liar-s-dice-8qen14?ref_content=my-projects-tab&ref_feature=my_projects']
};

const jeopardy = {
	title: 'Python Jeopardy Game', 
	dates: 'Jun. 2021',
	media: './public/thumbnails/', 
	description: ['Includes file to change questions and incorrect answer options are randomized.', 'Keeps track of answered questions and tallys score.', 'Contains multiple game screens for start menu, game menu, questions, and end menu.'], 
	skills: ['Python', 'PyGame'], 
	linkLables: ['Github'],
	links: ['https://github.com/GabyShamblin/Examples/tree/master/Python%20Jeopardy%20Game']
};



export { projects, moon, room, rrr, ar, senserator, heart, vr, topo, contact, emily, dice, jeopardy };