import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import VizSensor from 'react-visibility-sensor';
import { Box, Grid, Grow, Typography, 
	List, ListItem } from '@mui/material';
import { flexbox } from '@mui/system';

const CustomBox = styled(Box)(() => ({
  maxWidth: 1200,
	backgroundColor: "rgba(51, 155, 158, 0.5)", 
	m: 'auto',
	mb: 5, 
	p: 1,
	borderRadius: 8,
}));

const SliderBox = styled(Box)(() => ({
  backgroundColor: 'rgba(105, 105, 105)',
	borderRadius: 50,
	mb: 5,
	p: 1,
	display: 'flex',
	justifyContent: 'flex-start'
}));

function Resume() {
	useEffect(() => {
		document.title = 'Resume';
	});

	const boxWidth = 1200;
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
					backgroundColor: '#edf0f0',
					px: 2, py: 1}}>

					<Typography sx={{fontSize: 40, letterSpacing: 5, p: 10}}>
							Resume
					</Typography>

					<Typography sx={{fontSize: 24, letterSpacing: 5, p: 2, pt: 5}}>
						Education
					</Typography>

					<VizSensor
						partialVisibility
						onChange={(isVisible) => {
							setShowBox1(isVisible);
					}} >
					<Grow in={showBox1}>
					<CustomBox id="project1" sx={{
						maxWidth: boxWidth,
						backgroundColor: 'rgba(51, 155, 158, 0.5)',
						m: 'auto', mb: 1, p: 1}}>

						<Typography sx={{fontSize: 20}}>
							University of Central Florida
						</Typography>

						<Box sx={{ml: 5, textAlign: 'left'}}>
							<Typography sx={{fontSize: 20}}>
								Orlando, FL
							</Typography>
							<Typography sx={{fontSize: 20}}>
								Bachelor of Science, Computer Science
							</Typography>
							<Typography sx={{fontSize: 20}}>
								Expected Graduation: December 2023
							</Typography>
							<Typography sx={{fontSize: 20}}>
								GPA: 3.65/4.00
							</Typography>
						</Box>
					</CustomBox>
					</Grow>
					</VizSensor>

					<VizSensor
						partialVisibility
						onChange={(isVisible) => {
							setShowBox2(isVisible);
					}} >
					<Grow in={showBox2}>
					<CustomBox sx={{
						maxWidth: boxWidth,
						backgroundColor: 'rgba(51, 155, 158, 0.5)',
						m: 'auto', mb: 1, p: 1}}>
						<Typography sx={{fontSize: 20}}>
							Relevant Coursework
						</Typography>

						<Box sx={{ml: 5, textAlign: 'left'}}>
							<List sx={{fontSize: 20, mr: 8}} >
									<ListItem disablePadding>
										- Computer Science I
									</ListItem>
									<ListItem disablePadding>
										- Computer Science I
									</ListItem>
									<ListItem disablePadding>
										- Object-Oriented Programming
									</ListItem>
									<ListItem disablePadding>
										- Processes of Object-Oriented Software Development
									</ListItem>
								</List>
						</Box>
					</CustomBox>
					</Grow>
					</VizSensor>

					<VizSensor
						partialVisibility
						onChange={(isVisible) => {
							setShowBox3(isVisible);
					}} >
					<Grow in={showBox3}>
					<CustomBox sx={{
						maxWidth: boxWidth,
						backgroundColor: 'rgba(51, 155, 158, 0.5)',
						m: 'auto', mb: 1, p: 1}}>
						<Typography sx={{fontSize: 20}}>
							Honors
						</Typography>

						<Box sx={{ml: 5, textAlign: 'left'}}>
							<List sx={{fontSize: 20, mr: 8}} >
									<ListItem disablePadding>
										- Florida Bright Futures Academic Scholarship
									</ListItem>
									<ListItem disablePadding>
										- UCF Pegasus Gold Scholarship
									</ListItem>
									<ListItem disablePadding>
										- UCF EXCEL Program
									</ListItem>
									<ListItem disablePadding>
										- UCF Dean's List
									</ListItem>
								</List>
						</Box>
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
						Skills
					</Typography>

					<VizSensor
						partialVisibility
						onChange={(isVisible) => {
							setShowBox4(isVisible);
					}} >
					<Grow in={showBox4}>
					<CustomBox sx={{
						maxWidth: boxWidth,
						backgroundColor: 'rgba(51, 155, 158, 0.5)',
						m: 'auto', mb: 1, p: 1}}>
						
						<SliderBox sx={{
						backgroundColor: 'rgba(105, 105, 105)',
						m: 'auto', p: 0.5, mb: 1}}>
							<Box sx={{
							backgroundColor: 'rgba(168, 185, 203)',
							borderRadius: 10,  
							width: '50%'}}>
								<Typography sx={{fontSize: 20, textAlign: 'right', mr: 1}}>
									C
								</Typography>
							</Box>
						</SliderBox>

						<SliderBox sx={{
						backgroundColor: 'rgba(105, 105, 105)',
						m: 'auto', p: 0.5, mb: 1}}>
							<Box sx={{
							backgroundColor: 'rgba(158, 114, 212)',
							borderRadius: 10,
							width: '30%'}}>
								<Typography sx={{fontSize: 20, textAlign: 'right', mr: 1}}>
									C#
								</Typography>
							</Box>
						</SliderBox>

						<SliderBox sx={{
						backgroundColor: 'rgba(105, 105, 105)',
						m: 'auto', p: 0.5, mb: 1}}>
							<Box sx={{
							backgroundColor: 'rgba(0, 150, 219)',
							borderRadius: 10,  
							width: '35%'}}>
								<Typography sx={{fontSize: 20, textAlign: 'right', mr: 1}}>
									CSS
								</Typography>
							</Box>
						</SliderBox>

						<SliderBox sx={{
						backgroundColor: 'rgba(105, 105, 105)',
						m: 'auto', p: 0.5, mb: 1}}>
							<Box sx={{
							backgroundColor: 'rgba(241, 101, 40)',
							borderRadius: 10,  
							width: '35%'}}>
								<Typography sx={{fontSize: 20, textAlign: 'right', mr: 1}}>
									HTML5
								</Typography>
							</Box>
						</SliderBox>

						<SliderBox sx={{
						backgroundColor: 'rgba(105, 105, 105)',
						m: 'auto', p: 0.5, mb: 1}}>
							<Box sx={{
							backgroundColor: 'rgba(248, 153, 23)',
							borderRadius: 10,  
							width: '80%'}}>
								<Typography sx={{fontSize: 20, textAlign: 'right', mr: 1}}>
									Java
								</Typography>
							</Box>
						</SliderBox>

						<SliderBox sx={{
						backgroundColor: 'rgba(105, 105, 105)',
						m: 'auto', p: 0.5, mb: 1}}>
							<Box sx={{
							backgroundColor: 'rgba(247, 223, 29)',
							borderRadius: 10,  
							width: '50%'}}>
								<Typography sx={{fontSize: 20, textAlign: 'right', mr: 1}}>
									JavaScript
								</Typography>
							</Box>
						</SliderBox>

						<SliderBox sx={{
						backgroundColor: 'rgba(105, 105, 105)',
						m: 'auto', p: 0.5, mb: 1}}>
							<Box sx={{
							backgroundColor: 'rgba(53, 122, 177)',
							borderRadius: 10,  
							width: '70%'}}>
								<Typography sx={{fontSize: 20, textAlign: 'right', mr: 1, color: "#ffffff"}}>
									Python
								</Typography>
							</Box>
						</SliderBox>

						<SliderBox sx={{
						backgroundColor: 'rgba(105, 105, 105)',
						m: 'auto', p: 0.5}}>
							<Box sx={{
							backgroundColor: 'rgba(98, 218, 252)',
							borderRadius: 10,  
							width: '45%'}}>
								<Typography sx={{fontSize: 20, textAlign: 'right', mr: 1}}>
									React
								</Typography>
							</Box>
						</SliderBox>

					</CustomBox>
					</Grow>
					</VizSensor>

					<VizSensor
						partialVisibility
						onChange={(isVisible) => {
							setShowBox5(isVisible);
					}} >
					<Grow in={showBox5}>
					<CustomBox sx={{
						maxWidth: boxWidth,
						backgroundColor: 'rgba(51, 155, 158, 0.5)',
						m: 'auto', mb: 1, p: 1}}>

						<Grid container spacing={2} sx={{textAlign: 'left', ml: 5, mr: 8, fontSize: 20}}>
							<Grid item xs={6}>
								- Object-Oriented Programming
							</Grid>
							<Grid item xs={6}>
								- Microsoft Word
							</Grid>
							<Grid item xs={6}>
								- Microsoft Powerpoint
							</Grid>
							<Grid item xs={6}>
								- Microsoft Excel
							</Grid>
							<Grid item xs={6}>
								- Intermediate Spanish
							</Grid>
							<Grid item xs={6}>
								- Leadership
							</Grid>
							<Grid item xs={6}>
								- Organization
							</Grid>
							<Grid item xs={6}>
								- Teamwork
							</Grid>
							<Grid item xs={6}>
								- Communication
							</Grid>
						</Grid>
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
						Experience
					</Typography>

					<VizSensor
						partialVisibility
						onChange={(isVisible) => {
							setShowBox6(isVisible);
					}} >
					<Grow in={showBox6}>
					<CustomBox sx={{
						maxWidth: boxWidth,
						backgroundColor: 'rgba(51, 155, 158, 0.5)',
						m: 'auto', mb: 1, p: 1}}>
						<Typography sx={{fontSize: 20}}>
							Web Development Intern
						</Typography>

						<Box sx={{ml: 5, textAlign: 'left'}}>
							<Typography sx={{fontSize: 20}}>
								Epic North LLC, Remote
							</Typography>
							<Typography sx={{fontSize: 20}}>
								June 2022 - Present
							</Typography>
							<List dense sx={{fontSize: 20, mx: 3, mr: 8}} >
								<ListItem>
									- Use Angular, C#, SQL, and Azure DevOps to repair website code and optimize website functionality
								</ListItem>
							</List>
						</Box>
					</CustomBox>
					</Grow>
					</VizSensor>

					<VizSensor
						partialVisibility
						onChange={(isVisible) => {
							setShowBox7(isVisible);
					}} >
					<Grow in={showBox7}>
					<CustomBox sx={{
						maxWidth: boxWidth,
						backgroundColor: 'rgba(51, 155, 158, 0.5)',
						m: 'auto', mb: 1, p: 1}}>
						<Typography sx={{fontSize: 20}}>
							Teaching Assistant
						</Typography>

						<Box sx={{ml: 5, textAlign: 'left'}}>
							<Typography sx={{fontSize: 20}}>
								University of Central Florida, Orlando, FL
							</Typography>
							<Typography sx={{fontSize: 20}}>
								July 2021 - May 2022
							</Typography>
							<List dense sx={{fontSize: 20, mx: 3, mr: 8}}>
								<ListItem>
									- Assist in teaching introductory programming topics in Python to a class of about 230 students.
								</ListItem>
								<ListItem>
									- Grade assignments for approximately 80 students and provide appropriate feedback in a timely manner.
								</ListItem>
								<ListItem>
									- Hold two labs weekly and office hours to offer students extra support.
								</ListItem>
							</List>
						</Box>
					</CustomBox>
					</Grow>
					</VizSensor>

					<VizSensor
						partialVisibility
						onChange={(isVisible) => {
							setShowBox8(isVisible);
					}} >
					<Grow in={showBox8}>
					<CustomBox sx={{
						maxWidth: boxWidth,
						backgroundColor: 'rgba(51, 155, 158, 0.5)',
						m: 'auto', mb: 1, p: 1}}>
						<Typography sx={{fontSize: 20}}>
							Teaching Assistant
						</Typography>

						<Box sx={{ml: 5, textAlign: 'left'}}>
							<Typography sx={{fontSize: 20}}>
								UCF Computer Science Summer Institute, Orlando, FL
							</Typography>
							<Typography sx={{fontSize: 20}}>
								June 2021
							</Typography>
							<List dense sx={{fontSize: 20, mx: 3, mr: 8}} >
								<ListItem>
									- Graded assignments and provided appropriate feedback in a timely manner.
								</ListItem>
								<ListItem>
									- Taught topics in Python to a class of eight students and offered support with questions.
								</ListItem>
							</List>
						</Box>
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
						Activities
					</Typography>

					<VizSensor
						partialVisibility
						onChange={(isVisible) => {
							setShowBox9(isVisible);
					}} >
					<Grow in={showBox9}>
					<CustomBox sx={{
						maxWidth: boxWidth,
						backgroundColor: 'rgba(51, 155, 158, 0.5)',
						m: 'auto', mb: 1, p: 1}}>
						<Typography sx={{fontSize: 20}}>
							eXtended Reality & Training Lab Volunteer
						</Typography>

						<Box sx={{ml: 5, textAlign: 'left'}}>
							<Typography sx={{fontSize: 20}}>
								January 2022 - Present
							</Typography>
							<Typography sx={{fontSize: 20, mx: 3, mr: 8}}>
								Through the EXCEL program, I have the opportunity to participate in research. The project I'm currently working on is a VR grocery store game that will be put on the Steam VR library and will be used to collect data from players.
							</Typography>
						</Box>
					</CustomBox>
					</Grow>
					</VizSensor>

					<VizSensor
						partialVisibility
						onChange={(isVisible) => {
							setShowBox10(isVisible);
					}} >
					<Grow in={showBox10}>
					<CustomBox sx={{
						maxWidth: boxWidth,
						backgroundColor: 'rgba(51, 155, 158, 0.5)',
						m: 'auto', mb: 1, p: 1}}>
						<Typography sx={{fontSize: 20}}>
							University of Central Florida Knight Hacks
						</Typography>

						<Box sx={{ml: 5, textAlign: 'left'}}>
							<Typography sx={{fontSize: 20}}>
								August 2020 - Present
							</Typography>
							<Typography sx={{fontSize: 20, mx: 3, mr: 8}}>
								Knight Hacks is a club that focuses on giving students a space to learn and create outside of the classroom. They hold weekly workshops on various programming topics and a yearly hackathon.
							</Typography>
						</Box>
					</CustomBox>
					</Grow>
					</VizSensor>

				</Box>

			</div>
		</React.Fragment>
  );
}

export default Resume;
