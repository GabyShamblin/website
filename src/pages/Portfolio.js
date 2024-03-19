import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import VizSensor from 'react-visibility-sensor';
import { Box, Button, Grid, Grow, Hidden, Typography, 
	Link, List, ListItem } from '@mui/material';
import { flexbox } from '@mui/system';
import './App.css';
import './typing.css';

import heart from './public/heart.jpg';
import heartGameWin from './public/HeartWin64.zip';
import heartGameMac from './public/HeartMac.zip';
import grayWebsite from './public/grayWebsite.jpg';
import pythonGame from './public/pythonMenu.jpg';
import scheduler from './public/scheduler.jpg';
import TOTSPresentation from './public/Group 1 TOTS Presentation.pdf';
import contact from './public/contactManager.jpg';
import ContactPresentation from './public/Small Project.pdf';
import diceGame from './public/diceGame.jpg';

const CustomBox = styled(Box)(() => ({
  maxWidth: 1000,
	backgroundColor: "#73bed9", 
	color: 'black',
	m: 'auto',
	mb: 5, 
	p: 1,
	borderRadius: 8,
}));

const CustomButton = styled(Button)(() => ({
  minWidth: 150,
	backgroundColor: "#3067a7", 
	color: 'white',
	borderColor: "#000000", 
	borderRadius: 50,
	fontSize: 18,
	'&:hover': {
		backgroundColor: "rgba(194, 194, 194)", 
		borderColor: "#000000", 
		color: 'black',
	}
}));

const Header = styled(Typography)(() => ({
	fontSize: 24,
	fontWeight: 300,
}));

function Portfolio() {
	useEffect(() => {
		document.title = 'Portfolio';
	});

	const [showProject1, setShowProject1] = useState(false);
	const [showProject2, setShowProject2] = useState(false);
	const [showProject3, setShowProject3] = useState(false);
	const [showProject4, setShowProject4] = useState(false);
	const [showProject5, setShowProject5] = useState(false);
	const [showProject6, setShowProject6] = useState(false);
	const [showProject7, setShowProject7] = useState(false);
	const [showProject8, setShowProject8] = useState(false);
	const [showProject9, setShowProject9] = useState(false);
	const [showProject10, setShowProject10] = useState(false);

  return (
		<React.Fragment>
			<div className="App">

				<div className='wrapper'>
					<div className='typing-portfolio'>
						/* Projects */
					</div>
				</div>

				{/* RRR Project */}
				<VizSensor
					partialVisibility
					onChange={() => {
						setShowProject10(true);
				}} >
				<Grow in={showProject10}>
				<CustomBox sx={{m: 'auto', mb: 5, p: 1}}>
					<Header variant='h3'>
						Realistic Realtime Rendering (August - December 2023)
					</Header>

					<Grid container sx={{
						display: flexbox, 
						flexDirection: 'row',
						alignContent: 'center',
						justifyContent: 'center',
						flexWrap: 'wrap',
						textAlign: 'center',
						p: 1}}>

						<Box item width='700'>
							<iframe id='video' src="https://www.youtube.com/embed/mS35nARSo88?si=Bo2cC8pXsvb7917V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</Box>

						<Box item m='auto' >
							<List sx={{fontSize: 20, maxWidth: 800}} >
								<ListItem>
									A project created for CAP 5727: Realistic Realtime Rendering
								</ListItem>
								<ListItem>
									Designed to mimic a real-world thunderstorm using Unreal Engine 5's Blueprints, Niagara particle system, and Lumen
								</ListItem>
								<ListItem>
									Unreal Engine 5
								</ListItem>
							</List>
						</Box>
					</Grid>

					<Grid container spacing={1} justifyContent={'center'}>
						<Grid item>
							<Link href="https://youtu.be/mS35nARSo88?si=TscXleuAKQbuq2yM"
							target="_blank" rel="noopener">
								<CustomButton variant="outlined">
									Video
								</CustomButton>
							</Link>
						</Grid>
						<Grid item>
							<Link href="https://github.com/GabyShamblin/Realtime-Rendering"
							target="_blank" rel="noopener">
								<CustomButton variant="outlined">
									Github
								</CustomButton>
							</Link>
						</Grid>
					</Grid>

				</CustomBox>
				</Grow>
				</VizSensor>

				{/* AR Playlist */}
				<VizSensor
					partialVisibility
					onChange={() => {
						setShowProject9(true);
				}} >
				<Grow in={showProject9}>
				<CustomBox sx={{m: 'auto', mb: 5, p: 1}}>
					<Header variant='h3'>
						Augmented Reality Engineering (August - December 2023)
					</Header>

					<Grid container sx={{
						display: flexbox, 
						flexDirection: 'row',
						alignContent: 'center',
						justifyContent: 'center',
						flexWrap: 'wrap',
						p: 1}}>

						<Box item width='700'>
							<iframe id='video' src="https://www.youtube.com/embed/videoseries?si=1AAebMOP9ndXdGL_&amp;list=PLLAatflC7TYIysXY9DPVkXql6H-apHFQX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</Box>

						<Box item m='auto' >
							<List sx={{fontSize: 20, maxWidth: 800}} >
								<ListItem>
									Unity projects on different topics created for CAP 6110: Augmented Reality Engineering
								</ListItem>
								<ListItem>
									Topics include tracking, visual coherence, situated visualization, interaction, navigation, and collaboration
								</ListItem>
								<ListItem>
									Unity, C#, Vuforia
								</ListItem>
							</List>
						</Box>
					</Grid>

					<Link href="https://youtube.com/playlist?list=PLLAatflC7TYIysXY9DPVkXql6H-apHFQX&si=1AAebMOP9ndXdGL_"
					target="_blank" rel="noopener">
						<CustomButton variant="outlined">
							Playlist
						</CustomButton>
					</Link>
				</CustomBox>
				</Grow>
				</VizSensor>

				{/* SenseRator */}
				<VizSensor
					partialVisibility
					onChange={() => {
						setShowProject8(true);
				}} >
				<Grow in={showProject8}>
				<CustomBox sx={{m: 'auto', mb: 5, p: 1}}>
					<Header variant='h3'>
						SenseRator (February - December 2023)
					</Header>

					<Grid container sx={{
						display: flexbox, 
						flexDirection: 'row',
						alignContent: 'center',
						justifyContent: 'center',
						flexWrap: 'wrap',
						p: 1}}>

						<Box item width='400' m='auto'>
							<iframe width="560" height="315" src="https://www.youtube.com/embed/rFd1qQmFYQ0?si=5D1fPlj4AGdrSoR1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</Box>

						<Box item m='auto'>
							<List sx={{fontSize: 20, maxWidth: 800}} >
								<ListItem>
									A group project of 5 people for Senior Design
								</ListItem>
								<ListItem>
									Uses a lidar and a camera to capture the environment
								</ListItem>
								<ListItem>
									Performs object detection and semantic segmentation on camera data and displays output to user
								</ListItem>
								<ListItem>
									Python, Open3D, PySimpleGUI
								</ListItem>
							</List>
						</Box>
					</Grid>

					<Link href="https://github.com/SenseRator/SenseRator" target='_blank' rel="noreferrer">
						<CustomButton variant="outlined">
							Github
						</CustomButton>
					</Link>

					{/* <Grid container spacing={1} justifyContent={'center'}>
						<Grid item>
							<Link href="https://youtu.be/rFd1qQmFYQ0?si=5D1fPlj4AGdrSoR1" target='_blank' rel="noreferrer">
								<CustomButton variant="outlined">
									Video
								</CustomButton>
							</Link>
						</Grid>
						<Grid item>
							<Link href="https://www.cecs.ucf.edu/SeniorDesignShowcase/team/senserator-machine-learning-for-disaster-response/" target='_blank' rel="noreferrer">
								<CustomButton variant="outlined">
									Showcase Page
								</CustomButton>
							</Link>
						</Grid>
					</Grid> */}

				</CustomBox>
				</Grow>
				</VizSensor>

				{/* Heart */}
				<VizSensor
					partialVisibility
					onChange={() => {
						setShowProject7(true);
				}} >
				<Grow in={showProject7}>
				<CustomBox sx={{m: 'auto', mb: 5, p: 1}}>
					<Header variant='h3'>
						Unity Heart Visualization Tool (May 2023)
					</Header>

					<Grid container sx={{
						display: flexbox, 
						flexDirection: 'row',
						alignContent: 'center',
						justifyContent: 'center',
						flexWrap: 'wrap',
						p: 1}}>

						<Box item width='700'>
							<img src={heart} alt="An anatomically correct human heart with white arrows running through to simulate blood flow. The parts are labeled with their appropriate names."></img>
						</Box>

						<Box item m='auto' >
							<List sx={{fontSize: 20, maxWidth: 800}}>
								<ListItem>
									Heart visualization including labels for different parts of the human heart
								</ListItem>
								<ListItem>
									Allows user to move through labels, start and stop the animation, rotate around subject, and zoom in and out.
								</ListItem>
								<ListItem>
									Made following&nbsp;
									<Link href="https://www.linkedin.com/learning-login/share?account=57691257&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Funity-medical-visualization-01-preparation-and-design%3Ftrk%3Dshare_ent_url%26shareId%3DJtE468q9TuqwSxeL8axRzQ%253D%253D"
									target="_blank" rel="noopener">
										LinkedIn Learning tutorial by Alan Thorn
									</Link>
								</ListItem>
								<ListItem>
									Unity, C#
								</ListItem>
							</List>
						</Box>
					</Grid>

					<Grid container spacing={1} justifyContent={'center'}>
						{/* <Link href="/heart">
							<CustomButton variant="outlined">
								Game Page
							</CustomButton>
						</Link> */}
						<Grid item>
							<a href={heartGameWin} download target='_blank' rel="noopener noreferrer">
								<CustomButton variant="outlined">
								Windows Build
								</CustomButton>
							</a>
						</Grid>
						<Grid item>
							<a href={heartGameMac} download target='_blank' rel="noopener noreferrer">
								<CustomButton variant="outlined">
								Mac Build
								</CustomButton>
							</a>
						</Grid>
					</Grid>

				</CustomBox>
				</Grow>
				</VizSensor>

				{/* VR Playlist */}
				<VizSensor
					partialVisibility
					onChange={() => {
						setShowProject6(true);
				}} >
				<Grow in={showProject6}>
				<CustomBox sx={{m: 'auto', mb: 5, p: 1}}>
					<Header variant='h3'>
						Virtual Reality Engineering (January - April 2023)
					</Header>

					<Grid container sx={{
						display: flexbox, 
						flexDirection: 'row',
						alignContent: 'center',
						justifyContent: 'center',
						flexWrap: 'wrap',
						p: 1}}>

						<Box item width='700'>
							<iframe id='video' src="https://www.youtube.com/embed/videoseries?list=PLLAatflC7TYJVc8Mac2dU3t1P8UZq8pqR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</Box>

						<Box item m='auto' >
							<List sx={{fontSize: 20, maxWidth: 800}} >
								<ListItem>
									Unity projects on different topics created for CAP 5115: Virtual Reality Engineering
								</ListItem>
								<ListItem>
									Topics include virtual environments, traveling, interactions, physics, animations, and user interfaces
								</ListItem>
								<ListItem>
									Unity, C#, SteamVR
								</ListItem>
							</List>
						</Box>
					</Grid>

					<Link href="https://youtube.com/playlist?list=PLLAatflC7TYJVc8Mac2dU3t1P8UZq8pqR"
					target="_blank" rel="noopener">
						<CustomButton variant="outlined">
							Playlist
						</CustomButton>
					</Link>
				</CustomBox>
				</Grow>
				</VizSensor>

				{/* Topo Schedule */}
				<VizSensor
					partialVisibility
					onChange={() => {
						setShowProject5(true);
				}} >
				<Grow in={showProject5}>
				<CustomBox sx={{m: 'auto', mb: 5, p: 1}}>
					<Header variant='h3'>
						Top of the Schedule (February - April 2022)
					</Header>

					<Grid container sx={{
						display: flexbox, 
						flexDirection: 'row',
						alignContent: 'center',
						justifyContent: 'center',
						flexWrap: 'wrap',
						p: 1}}>

						<Box item width='700'>
							<img src={scheduler} alt="A website with a black background. In the top left corner there is a 'reset nodes' button, in the middle text saying 'Schedule Builder', and in the top right corner a 'logout' button. There is a large white box below with a graph of nodes that contain class names. A smaller white box is on the right with elective boxes 1-6, a 'Math/Science' number box, 'Season' and 'Year' boxes, and a yellow submit button."></img>
						</Box>

						<Box item m='auto'>
							<List sx={{fontSize: 20, maxWidth: 800}} >
								<ListItem>
									A group project of 7 people for COP4331
								</ListItem>
								<ListItem>
									Allows users to create a college career schedule for the UCF Computer Science undergraduate program
								</ListItem>
								<ListItem>
									Uses an algorithm based on the importance of classes to create the schedule
								</ListItem>
								<ListItem>
									React, Material UI, JavaScript, ExpressJS, Mongoose, MongoDB
								</ListItem>
							</List>
						</Box>
					</Grid>

					{/* <Link href="https://group1-tots-mern.herokuapp.com/" 
					target="_blank" rel="noopener">
						<CustomButton variant="outlined">
							View site
						</CustomButton>
					</Link> */}
					<a href={TOTSPresentation} download="TOTS Presentation.pdf" target='_blank' rel="noopener noreferrer">
						<CustomButton variant="outlined">
							Presentation
						</CustomButton>
					</a>
				</CustomBox>
				</Grow>
				</VizSensor>

				{/* Knight's Contact Manager */}
				<VizSensor
					partialVisibility
					onChange={() => {
						setShowProject4(true);
				}} >
				<Grow in={showProject4}>
				<CustomBox sx={{m: 'auto', mb: 5, p: 1}}>
					<Header variant='h3'>
						Knight's Contact Manager (February 2022)
					</Header>

					<Grid container sx={{
						display: flexbox, 
						flexDirection: 'row',
						alignContent: 'center',
						justifyContent: 'center',
						flexWrap: 'wrap',
						p: 1}}>

						<Box item width='700'>
							<img src={contact} alt="A simple website with 'Knight's Contact Manager' and a sword through the K at the top. There is a large blue box beneath with two gray boxes labeled 'Register' and 'Login'. Register contains the input fields first name, last name, username, and password and a button. Login contains the input fields username and password and a button."></img>
						</Box>

						<Box item m='auto'>
							<List sx={{fontSize: 20, maxWidth: 800}} >
								<ListItem>
									A group project of 4 people for COP4331
								</ListItem>
								<ListItem>
									Users can login or register an account
								</ListItem>
								<ListItem>
									Allows logged in user to create, search, update, and delete contacts
								</ListItem>
								<ListItem>
									HTML, CSS, Bootstrap, PHP, SQL
								</ListItem>
							</List>
						</Box>
					</Grid>

					<a href={ContactPresentation} download="Contact Presentation.pdf" target='_blank' rel="noopener noreferrer">
						<CustomButton variant="outlined">
							Presentation
						</CustomButton>
					</a>
				</CustomBox>
				</Grow>
				</VizSensor>

				{/* emilygrayauthor.com */}
				<VizSensor
					partialVisibility
					onChange={() => {
						setShowProject3(true);
				}} >
				<Grow in={showProject3}>
				<CustomBox sx={{m: 'auto', mb: 5, p: 1}}>
					<Header variant='h3'>
						emilygrayauthor.com (December 2021 - Present)
					</Header>

					<Grid container sx={{
						display: flexbox, 
						flexDirection: 'row',
						alignContent: 'center',
						justifyContent: 'center',
						flexWrap: 'wrap',
						p: 1}}>

						<Box item width='700'>
							<img src={grayWebsite} alt="A simple website. Includes a navigation bar (Home, Bio, Books, Events, Contact), a header with a black background, purple wisps, and the words 'Emily Gray. Sparks to flames romance.'. Beneath is 'What's New' and 'Books' sections."></img>
						</Box>

						<Box item m='auto' >
							<List sx={{fontSize: 20, maxWidth: 800}} >
								<ListItem>
									Creation and maintenance of website for bestselling author
								</ListItem>
								<ListItem>
									HTML, CSS
								</ListItem>
							</List>
						</Box>
					</Grid>

					<Link href="https://emilygrayauthor.com/"
					target="_blank" rel="noopener">
						<CustomButton variant="outlined">
							Website
						</CustomButton>
					</Link>
				</CustomBox>
				</Grow>
				</VizSensor>

				{/* Liar's Dice */}
				<VizSensor
					partialVisibility
					onChange={() => {
						setShowProject2(true);
				}} >
				<Grow in={showProject2}>
				<CustomBox sx={{m: 'auto', mb: 5, p: 1}}>
					<Header variant='h3'>
						Liar's Dice Game (November 2021)
					</Header>

					<Grid container sx={{
						display: flexbox, 
						flexDirection: 'row',
						alignContent: 'center',
						justifyContent: 'center',
						flexWrap: 'wrap',
						p: 1}}>

						<Box item width='700'>
							<img src={diceGame} alt="A 4x5 game board filled with dice, only the bottom row of dice (Player four's dice) are showing their faces. There is a top bar showing player points, a black box on the left showing all of the player guesses, challenges, and points won, and a small box with buttons on the bottom that allows the player to enter a guess or challenge the previous guess."></img>
						</Box>

						<Box item m='auto'>
							<List sx={{fontSize: 20, maxWidth: 800}} >
								<ListItem>
									A group project of 4 people created for KnightHacks 2021
								</ListItem>
								<ListItem>
									I mostly worked in JavaScript on the base game rules
								</ListItem>
								<ListItem>
									Includes a game log to can keep track of players guesses
								</ListItem>
								<ListItem>
									Keeps track of answered questions and tallys score 
								</ListItem>
								<ListItem>
									HTML, CSS, JavaScript 
								</ListItem>
							</List>
						</Box>
					</Grid>

					<Link href="https://devpost.com/software/liar-s-dice-8qen14?ref_content=my-projects-tab&ref_feature=my_projects" 
					target="_blank" rel="noopener">
						<CustomButton variant="outlined">
							Hackathon Page
						</CustomButton>
					</Link>
				</CustomBox>
				</Grow>
				</VizSensor>

				{/* Jeopardy */}
				<VizSensor
					partialVisibility
					onChange={() => {
						setShowProject1(true);
				}} >
				<Grow in={showProject1}>
				<CustomBox sx={{m: 'auto', mb: 5, p: 1}}>
					<Header variant='h3'>
						Python Jeopardy Game (June 2021)
					</Header>

					<Grid container sx={{
						display: flexbox, 
						flexDirection: 'row',
						alignContent: 'center',
						justifyContent: 'center',
						flexWrap: 'wrap',
						p: 1}}>

						<Box item width='700' >
							<img src={pythonGame} alt="A 4x4 game board meant to mimic the TV game show Jeopardy. It's titled 'Trivia Time' and has score counters in the top corners, '2 correct out of 3' and 'Score: 20'"></img>
						</Box>

						<Box item m='auto'>
							<List sx={{fontSize: 20, maxWidth: 800}}>
								<ListItem>
									Includes file to change questions
								</ListItem>
								<ListItem>
									Incorrect answer options are randomized
								</ListItem>
								<ListItem>
									Keeps track of answered questions and tallys score
								</ListItem>
								<ListItem>
									Contains multiple game screens for start menu, game menu, questions, and end menu 
								</ListItem>
								<ListItem>
									Python, Pygame
								</ListItem>
							</List>
						</Box>
					</Grid>

					<Link href="https://github.com/GabyShamblin/Examples/tree/master/Python%20Jeopardy%20Game" 
					target="_blank" rel="noopener">
						<CustomButton variant="outlined">
							Github
						</CustomButton>
					</Link>
				</CustomBox>
				</Grow>
				</VizSensor>

				{/* Solo Projects */}

				{/* <Box sx={{
					display: flexbox,
					justifyContent: 'center',
					px: 2, py: 1}}> */}

					{/* <Typography variant='h2' sx={{fontSize: 24, letterSpacing: 5, p: 2, pt: 5}}>
						Solo Projects
					</Typography> */}

				{/* </Box> */}


				{/* Group Projects */}

				{/* <Box sx={{
					display: flexbox,
					justifyContent: 'center',
					px: 2, py: 1}}>

					<Typography variant='h2' sx={{fontSize: 24, letterSpacing: 5, p: 2}}>
						Group Projects
					</Typography>

				</Box> */}

			</div>
		</React.Fragment>
  );
}

export default Portfolio;
