import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import VizSensor from 'react-visibility-sensor';
import { Box, Button, Grid, Grow, Typography, 
	Link, List, ListItem } from '@mui/material';
import { flexbox } from '@mui/system';

import pythonGame from './public/pythonMenu.jpg';
import grayWebsite from './public/grayWebsite.jpg';
import diceGame from './public/diceGame.jpg';
import contact from './public/contactManager.jpg';
import scheduler from './public/scheduler.jpg';
import TOTSPresentation from './public/Group 1 TOTS Presentation.pdf';
import ContactPresentation from './public/Small Project.pdf';

const CustomBox = styled(Box)(() => ({
  maxWidth: 1200,
	backgroundColor: "rgba(51, 155, 158, 0.5)", 
	m: 'auto',
	mb: 5, 
	p: 1,
	borderRadius: 8,
}));

const CustomButton = styled(Button)(() => ({
  minWidth: 150,
	backgroundColor: "rgba(51, 155, 158, 0.5)", 
	color: "#000000", 
	borderColor: "#000000", 
	borderRadius: 50,
	fontSize: 18,
	'&:hover': {
		backgroundColor: "rgba(194, 194, 194, 0.5)", 
		borderColor: "#000000", 
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

  return (
		<React.Fragment>
			<div className="App">
				<Box sx={{
					display: flexbox,
					justifyContent: 'center',
					backgroundColor: '#edf0f0',
					px: 2, py: 1}}>

					<Typography sx={{fontSize: 40, letterSpacing: 5, p: 10}}>
						Personal Projects
					</Typography>

					<Typography sx={{fontSize: 24, letterSpacing: 5, p: 2, pt: 5}}>
						Solo Projects
					</Typography>

					<VizSensor
						partialVisibility
						onChange={(isVisible) => {
							setShowProject1(isVisible);
					}} >
					<Grow in={showProject1}>
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
									<ListItem disablePadding>
										- Includes file to change questions
									</ListItem>
									<ListItem disablePadding>
										- Incorrect answer options are randomized
									</ListItem>
									<ListItem disablePadding>
										- Keeps track of answered questions and tallys score
									</ListItem>
									<ListItem disablePadding>
										- Contains multiple game screens for start menu, game menu, questions, and end menu 
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

					<VizSensor
						partialVisibility
						onChange={(isVisible) => {
							setShowProject2(isVisible);
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
								<img src={grayWebsite} alt="A simple website. Includes a navigation bar (Home, Bio, Books, Events, Contact), a header with a wooden background with the words 'Emily Gray. Writing sparks to flames romance.', and a 'What's New' section. This section contains two book covers and states that they are new releases currently available on Amazon."></img>
							</Box>

							<Box item m='auto' >
								<List sx={{fontSize: 20, maxWidth: 600}} >
									<ListItem disablePadding>
										- Creation and maintenance of website for bestselling author
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
				</Box>

				<Box sx={{
					display: flexbox,
					justifyContent: 'center',
					backgroundColor: '#edf0f0',
					px: 2, py: 1}}>

					<Typography sx={{fontSize: 24, letterSpacing: 5, p: 2}}>
						Group Projects
					</Typography>

					<VizSensor
						partialVisibility
						onChange={(isVisible) => {
							setShowProject3(isVisible);
					}} >
					<Grow in={showProject3}>
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
									<ListItem disablePadding>
										- A group project created for KnightHacks 2021
									</ListItem>
									<ListItem disablePadding>
										- I mostly worked in JavaScript on the base game rules
									</ListItem>
									<ListItem disablePadding>
										- Includes a game log to can keep track of players guesses
									</ListItem>
									<ListItem disablePadding>
										- Keeps track of answered questions and tallys score 
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

					<VizSensor
						partialVisibility
						onChange={(isVisible) => {
							setShowProject4(isVisible);
					}} >
					<Grow in={showProject4}>
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
									<ListItem disablePadding>
										- A group project for COP4331
									</ListItem>
									<ListItem disablePadding>
										- Users can login or register an account
									</ListItem>
									<ListItem disablePadding>
										- Allows logged in user to create, search, update, and delete contacts
									</ListItem>
								</List>
							</Box>
						</Grid>

						<a href={ContactPresentation} download="Contact Presentation.pdf" target='_blank'>
							<CustomButton variant="outlined">
								View presentation
							</CustomButton>
						</a>
					</CustomBox>
					</Grow>
					</VizSensor>

					<VizSensor
						partialVisibility
						onChange={(isVisible) => {
							setShowProject5(isVisible);
					}} >
					<Grow in={showProject5}>
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
									<ListItem disablePadding>
										- A group project for COP4331
									</ListItem>
									<ListItem disablePadding>
										- Allows users to create a college career schedule for the UCF Computer Science undergraduate program
									</ListItem>
									<ListItem disablePadding>
										- Uses an algorithm based on the importance of classes to create the schedule
									</ListItem>
								</List>
							</Box>
						</Grid>

						<Link href="https://group1-tots-mern.herokuapp.com/" 
						target="_blank" rel="noopener">
							<CustomButton variant="outlined">
								View site
							</CustomButton>
						</Link>
						<a href={TOTSPresentation} download="TOTS Presentation.pdf" target='_blank'>
							<CustomButton variant="outlined">
							View presentation
							</CustomButton>
						</a>
					</CustomBox>
					</Grow>
					</VizSensor>
				</Box>

			</div>
		</React.Fragment>
  );
}

export default Portfolio;
