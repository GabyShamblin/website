import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import VizSensor from 'react-visibility-sensor';
import { Box, Button, Grid, Grow, Hidden, Typography, 
	List, ListItem } from '@mui/material';
import SkillSlider from './SkillSlider';
import { flexbox } from '@mui/system';

import FeedIcon from '@mui/icons-material/Feed';
import resume from './public/Gabriela Shamblin Resume.pdf';

import angular from './public/logos/angular.png';
import aspnet from './public/logos/aspnet.png';
import c from './public/logos/c.png';
import cpp from './public/logos/c++.png';
import csharp from './public/logos/csharp.png';
import css from './public/logos/css.png';
import haskell from './public/logos/haskell.png';
import html from './public/logos/html.png';
import java from './public/logos/java.png';
import javascript from './public/logos/javascript.png';
import python from './public/logos/python.png';
import react from './public/logos/react.png';
import typescript from './public/logos/typescript.png';
import unity from './public/logos/unity.png';

const CustomBox = styled(Box)(() => ({
  maxWidth: 1100,
	backgroundColor: "#73bed9", 
	color: 'black',
	m: 'auto', mb: 1, p: 1,
	fontSize: 20,
	borderRadius: 8,
}));

const CustomButton = styled(Button)(() => ({
	minWidth: 250,
  backgroundColor: "#a8659d", 
	color: "#000000", 
	borderRadius: 50,
	'&:hover': {
		backgroundColor: "rgba(194, 194, 194)", 
		borderColor: "#000000", 
	}
}));

function Resume() {
	useEffect(() => {
		document.title = 'Resume';
	});

	const [showBox1, setShowBox1] = useState(false);
	const [showBox2, setShowBox2] = useState(false);
	const [showBox3, setShowBox3] = useState(false);
	const [showBox4, setShowBox4] = useState(false);
	const [showBox5, setShowBox5] = useState(false);
	const [showBox6, setShowBox6] = useState(false);
	const [showBox7, setShowBox7] = useState(false);
	const [showBox8, setShowBox8] = useState(false);
	const [showBox9, setShowBox9] = useState(false);
	const [showBox10, setShowBox10] = useState(false);

  return (
		<React.Fragment>
			<div className="App">

				<Box sx={{
					display: flexbox,
					justifyContent: 'center',
					p:1, fontSize: 20}}>

					<Hidden smDown>
						<Typography sx={{fontSize: 40, letterSpacing: 5, p: 5, color: '#4a7837'}}>
							/* Resume */
						</Typography>
					</Hidden>
					<Hidden smUp>
						<Typography sx={{fontSize: 30, letterSpacing: 5, p: 5, color: '#4a7837'}}>
							/* Resume */
						</Typography>
					</Hidden>

					<a href={resume} download target='_blank' rel="noreferrer">
						<CustomButton aria-label='github' size='large'>
							<FeedIcon/>
							<Typography sx={{fontSize: 16, p: 1}}>
								PDF Version
							</Typography>
						</CustomButton>
					</a>
				</Box>

				{/* Education */}
				<Box sx={{
					display: flexbox,
					justifyContent: 'center',
					p:1, fontSize: 20}}>

					<Typography variant='h5' sx={{letterSpacing: 5, p: 2, pt: 5}}>
						Education
					</Typography>

					<VizSensor
						partialVisibility
						onChange={() => {
							setShowBox1(true);
					}} >
					<Grow in={showBox1}>
					<CustomBox id="project1" sx={{m: 'auto', mb: 1, p: 1}}>

						<Typography variant='h5'>
							University of Central Florida, Orlando, FL
						</Typography>

						<Grid container spacing={1} sx={{textAlign: 'left', fontSize: 20}}>
							<Grid item sm={12} md={6}>
								<List dense>
									<ListItem>
										Bachelor of Science, Computer Science
									</ListItem>
									<ListItem>
										Expected Graduation: December 2023
									</ListItem>
									<ListItem>
										GPA: 3.63/4.00
									</ListItem>
								</List>
							</Grid>

							<Grid item>
								<List dense>
									<ListItem>
										Master of Science, Computer Science
									</ListItem>
									<ListItem>
										Expected Start: January 2024
									</ListItem>
									<ListItem>
										Expected Graduation: December 2024
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</CustomBox>
					</Grow>
					</VizSensor>

					<VizSensor
						partialVisibility
						onChange={() => {
							setShowBox2(true);
					}} >
					<Grow in={showBox2}>
					<CustomBox sx={{m: 'auto', mb: 1, p: 1}}>
						<Typography variant='h5'>
							Relevant Coursework
						</Typography>

						<Grid container spacing={1} sx={{textAlign: 'left', fontSize: 20}}>
							<Grid item xs={12} sm={6}>
								<List sx={{fontSize: 20}} >
									<ListItem>
										Computer Science I
									</ListItem>
									<ListItem>
										Computer Science II
									</ListItem>
									<ListItem>
										Object-Oriented Programming
									</ListItem>
									<ListItem>
										Processes of Object-Oriented Software Development
									</ListItem>
									<ListItem>
										Matrix & Linear Algebra
									</ListItem>
								</List>
							</Grid>
							<Grid item>
								<List sx={{fontSize: 20}} >
									<ListItem>
										Artificial Intelligence
									</ListItem>
									<ListItem>
										Machine Learning
									</ListItem>
									<ListItem>
										Programming Languages
									</ListItem>
									<ListItem>
										Virtual Reality Engineering
									</ListItem>
									<ListItem>
										Senior Design
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</CustomBox>
					</Grow>
					</VizSensor>

					<VizSensor
						partialVisibility
						onChange={() => {
							setShowBox3(true);
					}} >
					<Grow in={showBox3}>
					<CustomBox sx={{m: 'auto', mb: 1, p: 1}}>
						<Typography variant='h5'>
							Honors
						</Typography>

						<Box sx={{textAlign: 'left'}}>
							<Grid container>
								<Grid item xs={12} sm={6}>
									<List sx={{fontSize: 20}} >
										<ListItem>
											Florida Bright Futures Academic Scholarship
										</ListItem>
										<ListItem>
											UCF Pegasus Gold Scholarship
										</ListItem>
									</List>
								</Grid>
								<Grid item>
								<List sx={{fontSize: 20}} >
										<ListItem>
											UCF EXCEL Program
										</ListItem>
										<ListItem>
											UCF Dean's List
										</ListItem>
									</List>
								</Grid>
							</Grid>
						</Box>
					</CustomBox>
					</Grow>
					</VizSensor>
				</Box>

				{/* Skills */}
				<Box sx={{
					display: flexbox,
					justifyContent: 'center',
					p: 1}}>

					<Typography variant='h5' sx={{letterSpacing: 5, p: 2}}>
						Skills
					</Typography>

					<VizSensor
						partialVisibility
						onChange={() => {
							setShowBox4(true);
					}} >
					<Grow in={showBox4}>
					<CustomBox sx={{m: 'auto', mb: 1, p: 1}}>

						{/* <SkillSlider 
							name="Angular" 
							color="rgba(221, 0, 49)"
							textWhite={true}
							length="40%"
							showBox={showBox4}
						/> */}

						<Grid container spacing={1.5} justifyContent='center'>
							<Grid item>
								<img id='logo' src={angular} alt="Angular programming language logo"/>
								<Typography>Angular</Typography>
							</Grid>
							<Grid item>
								<img id='logo' src={aspnet} alt="ASP.NET programming language logo"/>
								<Typography>ASP.NET</Typography>
							</Grid>
							<Grid item>
								<img id='logo' src={c} alt="C programming language logo"/>
								<Typography>C</Typography>
							</Grid>
							<Grid item>
								<img id='logo' src={csharp} alt="C sharp programming language logo"/>
								<Typography>C#</Typography>
							</Grid>
							<Grid item>
								<img id='logo' src={cpp} alt="C plus plus programming language logo"/>
								<Typography>C++</Typography>
							</Grid>
							<Grid item>
								<img id='logo' src={css} alt="CSS programming language logo"/>
								<Typography>CSS</Typography>
							</Grid>
							<Grid item>
								<img id='logo' src={haskell} alt="Haskell programming language logo"/>
								<Typography>Haskell</Typography>
							</Grid>
							<Grid item>
								<img id='logo' src={html} alt="HTML programming language logo"/>
								<Typography>HTML</Typography>
							</Grid>
							<Grid item>
								<img id='logo' src={java} alt="Java programming language logo"/>
								<Typography>Java</Typography>
							</Grid>
							<Grid item>
								<img id='logo' src={javascript} alt="Java script programming language logo"/>
								<Typography>JavaScript</Typography>
							</Grid>
							<Grid item>
								<img id='logo' src={python} alt="Python programming language logo"/>
								<Typography>Python</Typography>
							</Grid>
							<Grid item>
								<img id='logo' src={react} alt="React programming language logo"/>
								<Typography>React</Typography>
							</Grid>
							<Grid item>
								<img id='logo' src={typescript} alt="Type script logo"/>
								<Typography>TypeScript</Typography>
							</Grid>
							<Grid item>
								<img id='logo' src={unity} alt="Unity game engine logo"/>
								<Typography>Unity</Typography>
							</Grid>
						</Grid>

					</CustomBox>
					</Grow>
					</VizSensor>

					<VizSensor
						partialVisibility
						onChange={() => {
							setShowBox5(true);
					}} >
					<Grow in={showBox5}>
					<CustomBox sx={{m: 'auto', mb: 1, p: 1}}>
						<Grid container sx={{textAlign: 'left', fontSize: 20}}>
							<Grid item xs={12} sm={6}>
								<List>
									<ListItem>
										Object-Oriented Programming
									</ListItem>
									<ListItem>
										Microsoft Word
									</ListItem>
									<ListItem>
										Microsoft Powerpoint
									</ListItem>
									<ListItem>
										Microsoft Excel
									</ListItem>
								</List>
							</Grid>
							<Grid item>
								<List>
									<ListItem>
										Leadership
									</ListItem>
									<ListItem>
										Organization
									</ListItem>
									<ListItem>
										Teamwork
									</ListItem>
									<ListItem>
										Communication
									</ListItem>
									<ListItem>
										Conversational Spanish
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</CustomBox>
					</Grow>
					</VizSensor>

				</Box>

				{/* Experience */}
				<Box sx={{
					display: flexbox,
					justifyContent: 'center',
					p: 1}}>

					<Typography variant='h5' sx={{letterSpacing: 5, p: 2}}>
						Experience
					</Typography>

					<VizSensor
						partialVisibility
						onChange={() => {
							setShowBox6(true);
					}} >
					<Grow in={showBox6}>
					<CustomBox sx={{m: 'auto', mb: 1, p: 1}}>
						<Typography variant='h5'>
							Software Engineering Intern
						</Typography>

						<Hidden smDown>
							<Box sx={{mx: 5, textAlign: 'left'}}>
								<Typography sx={{fontSize: 20}}>
									JP Morgan & Chase, Tampa, FL
								</Typography>
								<Typography sx={{fontSize: 20}}>
									Expected Start: June 2023
								</Typography>
								{/* <List dense sx={{fontSize: 20, ml: 2}} >
									<ListItem>
										Use Angular, TypeScript, C#, SQL, and Azure DevOps to repair website code and optimize functionality
									</ListItem>
								</List> */}
							</Box>
						</Hidden>

						<Hidden smUp>
							<Box sx={{textAlign: 'center'}}>
								<Typography sx={{fontSize: 20}}>
									JP Morgan & Chase, Tampa, FL
								</Typography>
								<Typography sx={{fontSize: 20}}>
									Expected Start: June 2023
								</Typography>
								{/* <List dense sx={{fontSize: 20}} >
									<ListItem>
										Use Angular, TypeScript, C#, SQL, and Azure DevOps to repair website code and optimize website functionality
									</ListItem>
								</List> */}
							</Box>
						</Hidden>
					</CustomBox>
					</Grow>
					</VizSensor>

					<VizSensor
						partialVisibility
						onChange={() => {
							setShowBox6(true);
					}} >
					<Grow in={showBox6}>
					<CustomBox sx={{m: 'auto', mb: 1, p: 1}}>
						<Typography variant='h5'>
							Full Stack Intern
						</Typography>

						<Hidden smDown>
							<Box sx={{mx: 5, textAlign: 'left'}}>
								<Typography sx={{fontSize: 20}}>
									Epic North LLC, Remote
								</Typography>
								<Typography sx={{fontSize: 20}}>
									June 2022 - April 2023
								</Typography>
								<List dense sx={{fontSize: 20, ml: 2}} >
									<ListItem>
										Use Angular, TypeScript, ASP.NET, SQL, and Azure DevOps to repair website code and optimize functionality
									</ListItem>
								</List>
							</Box>
						</Hidden>

						<Hidden smUp>
							<Box sx={{textAlign: 'center'}}>
								<Typography sx={{fontSize: 20}}>
									Epic North LLC, Remote
								</Typography>
								<Typography sx={{fontSize: 20}}>
									June 2022 - Present
								</Typography>
								<List dense sx={{fontSize: 20}} >
									<ListItem>
										Use Angular, TypeScript, ASP.NET, SQL, and Azure DevOps to repair website code and optimize website functionality
									</ListItem>
								</List>
							</Box>
						</Hidden>
					</CustomBox>
					</Grow>
					</VizSensor>

					<VizSensor
						partialVisibility
						onChange={() => {
							setShowBox7(true);
					}} >
					<Grow in={showBox7}>
					<CustomBox sx={{m: 'auto', mb: 1, p: 1}}>
						<Typography variant='h5'>
							Teaching Assistant
						</Typography>

						<Hidden smDown>
							<Box sx={{mx: 5, textAlign: 'left'}}>
								<Typography sx={{fontSize: 20}}>
									University of Central Florida, Orlando, FL
								</Typography>
								<Typography sx={{fontSize: 20}}>
									July 2021 - May 2022
								</Typography>
								<List dense sx={{fontSize: 20, ml: 2}}>
									<ListItem>
										Assist in teaching introductory programming topics in Python to classes  of about 230 students.
									</ListItem>
									<ListItem>
										Grade assignments for approximately 80 students and provide appropriate feedback in a timely manner.
									</ListItem>
									<ListItem>
										Hold two labs weekly and office hours to offer students extra support.
									</ListItem>
								</List>
							</Box>
						</Hidden>

						<Hidden smUp>
							<Box sx={{textAlign: 'center'}}>
								<Typography sx={{fontSize: 20}}>
									University of Central Florida, Orlando, FL
								</Typography>
								<Typography sx={{fontSize: 20}}>
									July 2021 - May 2022
								</Typography>
								<List dense sx={{fontSize: 20}}>
									<ListItem>
										Assist in teaching introductory programming topics in Python to classes of about 230 students.
									</ListItem>
									<ListItem>
										Grade assignments for approximately 80 students and provide appropriate feedback in a timely manner.
									</ListItem>
									<ListItem>
										Hold two labs weekly and office hours to offer students extra support.
									</ListItem>
								</List>
							</Box>
						</Hidden>
					</CustomBox>
					</Grow>
					</VizSensor>

					<VizSensor
						partialVisibility
						onChange={() => {
							setShowBox8(true);
					}} >
					<Grow in={showBox8}>
					<CustomBox sx={{m: 'auto', mb: 1, p: 1}}>
						<Typography variant='h5'>
							Teaching Assistant
						</Typography>

						<Hidden smDown>
							<Box sx={{mx: 5, textAlign: 'left'}}>
								<Typography sx={{fontSize: 20}}>
									UCF Computer Science Summer Institute, Orlando, FL
								</Typography>
								<Typography sx={{fontSize: 20}}>
									June 2021
								</Typography>
								<List dense sx={{fontSize: 20, ml: 2}} >
									<ListItem>
										Graded assignments and provided appropriate feedback in a timely manner.
									</ListItem>
									<ListItem>
										Taught topics in Python to a class of eight students and offered support with questions.
									</ListItem>
								</List>
							</Box>
						</Hidden>

						<Hidden smUp>
							<Box sx={{textAlign: 'center'}}>
								<Typography sx={{fontSize: 20}}>
									UCF Computer Science Summer Institute, Orlando, FL
								</Typography>
								<Typography sx={{fontSize: 20}}>
									June 2021
								</Typography>
								<List dense sx={{fontSize: 20}} >
									<ListItem>
										Graded assignments and provided appropriate feedback in a timely manner.
									</ListItem>
									<ListItem>
										Taught topics in Python to a class of eight students and offered support with questions.
									</ListItem>
								</List>
							</Box>
						</Hidden>
					</CustomBox>
					</Grow>
					</VizSensor>

				</Box>

				{/* Activities */}
				<Box sx={{
					display: flexbox,
					justifyContent: 'center',
					p: 1}}>

					<Typography variant='h5' sx={{letterSpacing: 5, p: 2}}>
						Activities
					</Typography>

					<VizSensor
						partialVisibility
						onChange={() => {
							setShowBox9(true);
					}} >
					<Grow in={showBox9}>
					<CustomBox sx={{m: 'auto', mb: 1, p: 1}}>
						<Typography variant='h5'>
							Extended Reality & Training Lab Volunteer
						</Typography>

						<Hidden smDown>
							<Box sx={{mx: 5, textAlign: 'left'}}>
								<Typography sx={{fontSize: 20}}>
									January 2022 - Present
								</Typography>
								<Typography sx={{fontSize: 20, ml: 3, mr: 8}}>
									Currently a volunteer in a research lab here at UCF. I worked on a VR grocery store game that will be put on the Steam VR library and will be used to collect data from players.
								</Typography>
							</Box>
						</Hidden>

						<Hidden smUp>
							<Box sx={{textAlign: 'center'}}>
								<Typography sx={{fontSize: 20}}>
									January 2022 - Present
								</Typography>
								<Typography sx={{fontSize: 20, ml: 1, textAlign: 'left'}}>
									Through the EXCEL program, I have the opportunity to participate in research. The project I'm currently working on is a VR grocery store game that will be put on the Steam VR library and will be used to collect data from players.
								</Typography>
							</Box>
						</Hidden>
					</CustomBox>
					</Grow>
					</VizSensor>

					{/* <VizSensor
						partialVisibility
						onChange={() => {
							setShowBox10(true);
					}} >
					<Grow in={showBox10}>
					<CustomBox sx={{m: 'auto', mb: 1, p: 1}}>
						<Typography variant='h5'>
							University of Central Florida Knight Hacks
						</Typography>

						<Hidden smDown>
							<Box sx={{mx: 5, textAlign: 'left'}}>
								<Typography sx={{fontSize: 20}}>
									August 2020 - Present
								</Typography>
								<Typography sx={{fontSize: 20, ml: 3, mr: 8}}>
									Knight Hacks is a club that focuses on giving students a space to learn and create outside of the classroom. They hold weekly workshops on various programming topics and a yearly hackathon.
								</Typography>
							</Box>
						</Hidden>

						<Hidden smUp>
							<Box sx={{textAlign: 'center'}}>
								<Typography sx={{fontSize: 20}}>
									August 2020 - Present
								</Typography>
								<Typography sx={{fontSize: 20, ml: 1, textAlign: 'left'}}>
									Knight Hacks is a club that focuses on giving students a space to learn and create outside of the classroom. They hold weekly workshops on various programming topics and a yearly hackathon.
								</Typography>
							</Box>
						</Hidden>
					</CustomBox>
					</Grow>
					</VizSensor> */}

				</Box>

			</div>
		</React.Fragment>
  );
}

export default Resume;
