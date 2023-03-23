import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import VizSensor from 'react-visibility-sensor';
import { Box, Button, Grid, Grow, Typography, 
	Link, List, ListItem } from '@mui/material';
import { flexbox } from '@mui/system';
import './App.css';

import pythonGame from './public/pythonMenu.jpg';
import grayWebsite from './public/grayWebsite.jpg';
import diceGame from './public/diceGame.jpg';
import contact from './public/contactManager.jpg';
import scheduler from './public/scheduler.jpg';
import TOTSPresentation from './public/Group 1 TOTS Presentation.pdf';
import ContactPresentation from './public/Small Project.pdf';

const CustomBox = styled(Box)(() => ({
  maxWidth: 1200,
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

  return (
		<React.Fragment>
			<div className="App">
				<Box sx={{
					display: flexbox,
					justifyContent: 'center',
					px: 2, py: 1}}>

					<Typography sx={{fontSize: 40, letterSpacing: 5, p: 5, color: '#4a7837'}}>
						/* Portfolio */
					</Typography>

					<Typography sx={{fontSize: 24, letterSpacing: 5, p: 2, pt: 5}}>
						Solo Projects
					</Typography>

					<VizSensor
						partialVisibility
						onChange={() => {
							setShowProject1(true);
					}} >
					<Grow in={showProject1}>
					<CustomBox sx={{m: 'auto', mb: 5, p: 1}}>
						<Typography sx={{fontSize: 20}}>
							Virtual Reality Engineering - January 2023-Present
						</Typography>

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
								<List sx={{fontSize: 20, maxWidth: 600}} >
									<ListItem>
										- Unity projects on different topics created for CAP 5115: Virtual Reality Engineering
									</ListItem>
									<ListItem>
										- Unity, C#
									</ListItem>
								</List>
							</Box>
						</Grid>

						<Link href="https://youtube.com/playlist?list=PLLAatflC7TYJVc8Mac2dU3t1P8UZq8pqR"
						target="_blank" rel="noopener">
							<CustomButton variant="outlined">
								View playlist
							</CustomButton>
						</Link>
					</CustomBox>
					</Grow>
					</VizSensor>

					<VizSensor
						partialVisibility
						onChange={() => {
							setShowProject2(true);
					}} >
					<Grow in={showProject2}>
					<CustomBox sx={{m: 'auto', mb: 5, p: 1}}>
						<Typography sx={{fontSize: 20}}>
							emilygrayauthor.com - December 2021-Present
						</Typography>

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
								<List sx={{fontSize: 20, maxWidth: 600}} >
									<ListItem>
										- Creation and maintenance of website for bestselling author
									</ListItem>
									<ListItem>
										- HTML, CSS
									</ListItem>
								</List>
							</Box>
						</Grid>

						<Link href="https://emilygrayauthor.com/"
						target="_blank" rel="noopener">
							<CustomButton variant="outlined">
								View site
							</CustomButton>
						</Link>
					</CustomBox>
					</Grow>
					</VizSensor>

					<VizSensor
						partialVisibility
						onChange={() => {
							setShowProject3(true);
					}} >
					<Grow in={showProject3}>
					
					<CustomBox sx={{m: 'auto', mb: 5, p: 1}}>
						<Typography sx={{fontSize: 20}}>
							Python Jeopardy Game - June 2021
						</Typography>

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
								<List sx={{fontSize: 20, maxWidth: 600}}>
									<ListItem>
										- Includes file to change questions
									</ListItem>
									<ListItem>
										- Incorrect answer options are randomized
									</ListItem>
									<ListItem>
										- Keeps track of answered questions and tallys score
									</ListItem>
									<ListItem>
										- Contains multiple game screens for start menu, game menu, questions, and end menu 
									</ListItem>
									<ListItem>
										- Python, Pygame
									</ListItem>
								</List>
							</Box>
						</Grid>

						<Link href="https://github.com/GabyShamblin/Examples/tree/master/Python%20Jeopardy%20Game" 
						target="_blank" rel="noopener">
							<CustomButton variant="outlined">
								View GitHub page
							</CustomButton>
						</Link>
					</CustomBox>
					</Grow>
					</VizSensor>
				</Box>

				<Box sx={{
					display: flexbox,
					justifyContent: 'center',
					px: 2, py: 1}}>

					<Typography sx={{fontSize: 24, letterSpacing: 5, p: 2}}>
						Group Projects
					</Typography>

					<VizSensor
						partialVisibility
						onChange={() => {
							setShowProject4(true);
					}} >
					<Grow in={showProject4}>
					<CustomBox sx={{m: 'auto', mb: 5, p: 1}}>
						<Typography sx={{fontSize: 20}}>
							Top of the Schedule - February-April 2022
						</Typography>

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
								<List sx={{fontSize: 20, maxWidth: 600}} >
									<ListItem>
										- A group project of 7 people for COP4331
									</ListItem>
									<ListItem>
										- Allows users to create a college career schedule for the UCF Computer Science undergraduate program
									</ListItem>
									<ListItem>
										- Uses an algorithm based on the importance of classes to create the schedule
									</ListItem>
									<ListItem>
										- React, Material UI, JavaScript, ExpressJS, Mongoose, MongoDB
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
						<a href={TOTSPresentation} download="TOTS Presentation.pdf" target='_blank' rel="noreferrer">
							<CustomButton variant="outlined">
							View presentation
							</CustomButton>
						</a>
					</CustomBox>
					</Grow>
					</VizSensor>

					<VizSensor
						partialVisibility
						onChange={() => {
							setShowProject5(true);
					}} >
					<Grow in={showProject5}>
					<CustomBox sx={{m: 'auto', mb: 5, p: 1}}>
						<Typography sx={{fontSize: 20}}>
							Knight's Contact Manager - February 2022
						</Typography>

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
								<List sx={{fontSize: 20, maxWidth: 600}} >
									<ListItem>
										- A group project of 4 people for COP4331
									</ListItem>
									<ListItem>
										- Users can login or register an account
									</ListItem>
									<ListItem>
										- Allows logged in user to create, search, update, and delete contacts
									</ListItem>
									<ListItem>
										- HTML, CSS, Bootstrap, PHP, SQL
									</ListItem>
								</List>
							</Box>
						</Grid>

						<a href={ContactPresentation} download="Contact Presentation.pdf" target='_blank' rel="noreferrer">
							<CustomButton variant="outlined">
								View presentation
							</CustomButton>
						</a>
					</CustomBox>
					</Grow>
					</VizSensor>

					<VizSensor
						partialVisibility
						onChange={() => {
							setShowProject6(true);
					}} >
					<Grow in={showProject6}>
					<CustomBox sx={{m: 'auto', mb: 5, p: 1}}>
						<Typography sx={{fontSize: 20}}>
							Liar's Dice Game - November 2021
						</Typography>

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
								<List sx={{fontSize: 20, maxWidth: 600}} >
									<ListItem>
										- A group project of 4 people created for KnightHacks 2021
									</ListItem>
									<ListItem>
										- I mostly worked in JavaScript on the base game rules
									</ListItem>
									<ListItem>
										- Includes a game log to can keep track of players guesses
									</ListItem>
									<ListItem>
										- Keeps track of answered questions and tallys score 
									</ListItem>
									<ListItem>
										- HTML, CSS, JavaScript 
									</ListItem>
								</List>
							</Box>
						</Grid>

						<Link href="https://devpost.com/software/liar-s-dice-8qen14?ref_content=my-projects-tab&ref_feature=my_projects" 
						target="_blank" rel="noopener">
							<CustomButton variant="outlined">
								View hackathon page
							</CustomButton>
						</Link>
					</CustomBox>

					</Grow>
					</VizSensor>
				</Box>

			</div>
		</React.Fragment>
  );
}

export default Portfolio;
