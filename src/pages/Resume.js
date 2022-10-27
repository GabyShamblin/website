import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import VizSensor from 'react-visibility-sensor';
import { Box, Grid, Grow, Typography, 
	List, ListItem, Hidden } from '@mui/material';
import { flexbox } from '@mui/system';

const CustomBox = styled(Box)(() => ({
  maxWidth: 1000,
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

						<Hidden smDown>
							<Box sx={{ml: 5, textAlign: 'left'}}>
								<List sx={{fontSize: 20}} >
										<ListItem>
											- Computer Science I
										</ListItem>
										<ListItem>
											- Computer Science I
										</ListItem>
										<ListItem>
											- Object-Oriented Programming
										</ListItem>
										<ListItem>
											- Processes of Object-Oriented Software Development
										</ListItem>
										<ListItem>
											- Artificial Intelligence
										</ListItem>
										<ListItem>
											- Programming Languages
										</ListItem>
									</List>
							</Box>
						</Hidden>

						<Hidden smUp>
							<Box sx={{textAlign: 'left'}}>
								<List sx={{fontSize: 20}} >
										<ListItem>
											- Computer Science I
										</ListItem>
										<ListItem>
											- Computer Science I
										</ListItem>
										<ListItem>
											- Object-Oriented Programming
										</ListItem>
										<ListItem>
											- Processes of Object-Oriented Software Development
										</ListItem>
										<ListItem>
											- Artificial Intelligence
										</ListItem>
										<ListItem>
											- Programming Languages
										</ListItem>
									</List>
							</Box>
						</Hidden>
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

						<Hidden smDown>
							<Box sx={{ml: 5, textAlign: 'left'}}>
								<List sx={{fontSize: 20}} >
									<ListItem>
										- Florida Bright Futures Academic Scholarship
									</ListItem>
									<ListItem>
										- UCF Pegasus Gold Scholarship
									</ListItem>
									<ListItem>
										- UCF EXCEL Program
									</ListItem>
									<ListItem>
										- UCF Dean's List
									</ListItem>
								</List>
							</Box>
						</Hidden>

						<Hidden smUp>
							<Box sx={{textAlign: 'left'}}>
								<List sx={{fontSize: 20}} >
									<ListItem>
										- Florida Bright Futures Academic Scholarship
									</ListItem>
									<ListItem>
										- UCF Pegasus Gold Scholarship
									</ListItem>
									<ListItem>
										- UCF EXCEL Program
									</ListItem>
									<ListItem>
										- UCF Dean's List
									</ListItem>
								</List>
							</Box>
						</Hidden>
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
							backgroundColor: 'rgba(221, 0, 49)',
							borderRadius: 10,  
							width: '40%'}}>
								<Typography sx={{fontSize: 20, textAlign: 'right', mr: 1, color: "#ffffff"}}>
									Angular
								</Typography>
							</Box>
						</SliderBox>
						
						<SliderBox sx={{
						backgroundColor: 'rgba(105, 105, 105)',
						m: 'auto', p: 0.5, mb: 1}}>
							<Box sx={{
							backgroundColor: 'rgba(168, 185, 203)',
							borderRadius: 10,  
							width: '30%'}}>
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
							width: '40%'}}>
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
							width: '60%'}}>
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
							width: '65%'}}>
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
							width: '55%'}}>
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

						<Hidden smDown>
							<Grid container spacing={1} sx={{textAlign: 'left', ml: 5, mr: 5, fontSize: 20}}>
								<Grid item xs={6}>
									<List sx={{fontSize: 20}} >
										<ListItem>
											- Object-Oriented Programming
										</ListItem>
										<ListItem>
											- Microsoft Word
										</ListItem>
										<ListItem>
											- Microsoft Powerpoint
										</ListItem>
										<ListItem>
											- Microsoft Excel
										</ListItem>
										<ListItem>
											- Intermediate Spanish
										</ListItem>
									</List>
								</Grid>
								<Grid item xs={6}>
									<List sx={{fontSize: 20}} >
										<ListItem>
											- Leadership
										</ListItem>
										<ListItem>
											- Organization
										</ListItem>
										<ListItem>
											- Teamwork
										</ListItem>
										<ListItem>
											- Communication
										</ListItem>
									</List>
								</Grid>
							</Grid>
						</Hidden>

						<Hidden smUp>
							<Grid container spacing={1} sx={{textAlign: 'left', fontSize: 20}}>
								<Grid item xs={6}>
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
								<Grid item xs={6}>
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
											Intermediate Spanish
										</ListItem>
									</List>
								</Grid>
							</Grid>
						</Hidden>
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

						<Hidden smDown>
							<Box sx={{ml: 5, textAlign: 'left'}}>
								<Typography sx={{fontSize: 20}}>
									Epic North LLC, Remote
								</Typography>
								<Typography sx={{fontSize: 20}}>
									June 2022 - Present
								</Typography>
								<List dense sx={{fontSize: 20, mx: 2}} >
									<ListItem>
										- Use Angular, C#, SQL, and Azure DevOps to repair website code and optimize website functionality
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
										- Use Angular, C#, SQL, and Azure DevOps to repair website code and optimize website functionality
									</ListItem>
								</List>
							</Box>
						</Hidden>
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

						<Hidden smDown>
							<Box sx={{ml: 5, textAlign: 'left'}}>
								<Typography sx={{fontSize: 20}}>
									University of Central Florida, Orlando, FL
								</Typography>
								<Typography sx={{fontSize: 20}}>
									July 2021 - May 2022
								</Typography>
								<List dense sx={{fontSize: 20, mx: 2}}>
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
						</Hidden>
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

						<Hidden smDown>
							<Box sx={{ml: 5, textAlign: 'left'}}>
								<Typography sx={{fontSize: 20}}>
									UCF Computer Science Summer Institute, Orlando, FL
								</Typography>
								<Typography sx={{fontSize: 20}}>
									June 2021
								</Typography>
								<List dense sx={{fontSize: 20, mx: 2}} >
									<ListItem>
										- Graded assignments and provided appropriate feedback in a timely manner.
									</ListItem>
									<ListItem>
										- Taught topics in Python to a class of eight students and offered support with questions.
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
										- Graded assignments and provided appropriate feedback in a timely manner.
									</ListItem>
									<ListItem>
										- Taught topics in Python to a class of eight students and offered support with questions.
									</ListItem>
								</List>
							</Box>
						</Hidden>
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

						<Hidden smDown>
							<Box sx={{ml: 5, textAlign: 'left'}}>
								<Typography sx={{fontSize: 20}}>
									January 2022 - Present
								</Typography>
								<Typography sx={{fontSize: 20, mx: 3, mr: 8}}>
									Through the EXCEL program, I have the opportunity to participate in research. The project I'm currently working on is a VR grocery store game that will be put on the Steam VR library and will be used to collect data from players.
								</Typography>
							</Box>
						</Hidden>

						<Hidden smUp>
							<Box sx={{textAlign: 'center'}}>
								<Typography sx={{fontSize: 20}}>
									January 2022 - Present
								</Typography>
								<Typography sx={{fontSize: 20, mx: 1, textAlign: 'left'}}>
									Through the EXCEL program, I have the opportunity to participate in research. The project I'm currently working on is a VR grocery store game that will be put on the Steam VR library and will be used to collect data from players.
								</Typography>
							</Box>
						</Hidden>
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

						<Hidden smDown>
							<Box sx={{ml: 5, textAlign: 'left'}}>
								<Typography sx={{fontSize: 20}}>
									August 2020 - Present
								</Typography>
								<Typography sx={{fontSize: 20, mx: 3, mr: 8}}>
									Knight Hacks is a club that focuses on giving students a space to learn and create outside of the classroom. They hold weekly workshops on various programming topics and a yearly hackathon.
								</Typography>
							</Box>
						</Hidden>

						<Hidden smUp>
							<Box sx={{textAlign: 'center'}}>
								<Typography sx={{fontSize: 20}}>
									August 2020 - Present
								</Typography>
								<Typography sx={{fontSize: 20, mx: 1, textAlign: 'left'}}>
									Knight Hacks is a club that focuses on giving students a space to learn and create outside of the classroom. They hold weekly workshops on various programming topics and a yearly hackathon.
								</Typography>
							</Box>
						</Hidden>
					</CustomBox>
					</Grow>
					</VizSensor>

				</Box>

			</div>
		</React.Fragment>
  );
}

export default Resume;
