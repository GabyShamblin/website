import * as React from 'react';
import { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Box, Chip, Grid, Hidden, IconButton, Typography, Link, List, ListItem } from '@mui/material';
import { flexbox } from '@mui/system';
import { styled } from '@mui/material/styles';
import './App.css';
import './typing.css';
import './styles.css';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CircleIcon from '@mui/icons-material/Circle';

// Project thumbnails are 3:2 ratio
import logo from './public/logo_blue.png';
import me from './public/picture_cropped.png';
import rain from './public/thumbnails/rain-project.png';
import ar from './public/thumbnails/ar-thumb.png';
import car from './public/thumbnails/senserator-thumb.jpg';

const MenuText = styled(Typography)(() => ({
  width: 150,
	fontSize: 20,
	color: "#a3aab4",
	textAlign: 'left',
	transition: '0.2s',
	'&:hover': {
		color: "#ffffff",
		'> div': {
			backgroundColor: '#ffffff',
			width: '100%',
		},
	},
	// border: '1px dashed #ffffff',
}));

const MenuLine = styled('div')(({chars = 0}) => ({
	height: '2px',
	width: `${chars}ch`,
	backgroundColor: '#a3aab4',
	transition: '0.2s',
}));

const CustomIconButton = styled(IconButton)(() => ({
	color: "#a3aab4", 
	borderRadius: 50,
	'&:hover': {
		color: "white", 
	}
}));

const CustomBox = styled(Box)(({link = false}) => ({
  maxWidth: 1200, 
	color: 'white',
	m: 'auto',
	p: 1,
	fontSize: '18px',
	borderRadius: 10,
	transition: '0.2s',
	'&:hover': {
		color: "#ffffff",
		backgroundColor: link ? 'rgba(3, 152, 175, 0.15)' : 'rgba(3, 152, 175, 0)'
	}
	// border: '2px dashed red'
}));

const ListGrid = styled(Grid)(({project = false}) => ({
	textAlign: 'left', 
	borderLeft: project ? '5px solid rgba(3, 152, 175, 0)' : '5px solid rgba(2, 232, 232, 0.5)',
}));

const ListDate = styled('div')(() => ({
	color: '#bcbcbc',
	fontSize: '16px',
	textAlign: 'right'
}));

const SkillChip = styled(Chip)(() => ({
	margin: 3,
	color: '#1efc0f',
	backgroundColor: 'rgba(30, 252, 15, 0.2)',
	border: '2px solid #1efc0f',
}));

const TimelineCircle = styled(CircleIcon)(() => ({
	position: 'absolute',
	color: '#027f8c',
	top: 0,
	right: '-31px',
}));



function Home() {
	useEffect(() => {
		document.title = 'Home';
	});
	const [path, setPath] = React.useState('');
	if (path !== window.location.pathname) {
		setPath(window.location.pathname);
	}

  return (
		<React.Fragment>
			<div className="App">
				<Box sx={{
					display: flexbox,
					justifyContent: 'center',
					px: 2, py: 1}}
				>
					<div className='wrapper'>
						<div>
							<img src={logo} id='logo' alt='Gabriela Shamblin'/>
						</div>
						<div className='typing-home'>
							/* Student & Programmer */
						</div>
					</div>

					<Grid container spacing={1}>
						<Grid container item xs={12} sm={3} spacing={1} justifyContent='flex-start' alignItems='center' direction='column'>
							{/* Picture */}
							<Grid item>
								<img 
									id="me"
									src={me} 
									alt="A picture of me :)"/>
							</Grid>

							{/* Left align text and add lines with extend animation */}
							{/* Menu Buttons */}
							<Grid container item justifyContent='center' alignContent='center' direction='column'>

								<Grid item sx={{p:0.5, px:1, mr:0.2}}>
									<HashLink smooth to="/#about" 
										style={{textDecoration: 'none'}}
									>
										<MenuText>
												<strong>About</strong>
												<MenuLine chars={5}/>
										</MenuText>
									</HashLink>
								</Grid>

								<Grid item sx={{p:0.5, px:1, mr:0.2}}>
									<HashLink smooth to="/#experience" 
										style={{textDecoration: 'none'}}
									>
										<MenuText>
												<strong>Experience</strong>
												<MenuLine chars={10}/>
										</MenuText>
									</HashLink>
								</Grid>

								<Grid item sx={{p:0.5, px:1, mr:0.2}}>
									<HashLink smooth to="/#projects"  
										style={{textDecoration: 'none'}}
									>
										<MenuText>
												<strong>Projects</strong>
												<MenuLine chars={7}/>
										</MenuText>
									</HashLink>
								</Grid>

							</Grid>

							{/* Contact Icons */}
							<Grid container item justifyContent='center' mt={10}>
								{/* Github Icon */}
								<Grid item>
									<Link href="https://github.com/GabyShamblin" 
									target="_blank" rel="noopener">
										<CustomIconButton aria-label='Github'>
											<GitHubIcon sx={{fontSize: 30}}/>
										</CustomIconButton>
									</Link>
								</Grid>
								{/* LinkedIn Icon */}
								<Grid item>
									<Link href="https://www.linkedin.com/in/gabriela-shamblin-7416611b7/" 
									target="_blank" rel="noopener">
										<CustomIconButton aria-label='LinkedIn'>
											<LinkedInIcon sx={{fontSize: 30}}/>
										</CustomIconButton>
									</Link>
								</Grid>
								{/* Youtube Icon */}
								<Grid item>
									<Link href="https://www.youtube.com/channel/UCzyOgtGvN-X7MkaP_amMYNg" 
									target="_blank" rel="noopener">
										<CustomIconButton aria-label='YouTube'>
											<YouTubeIcon sx={{fontSize: 30}}/>
										</CustomIconButton>
									</Link>
								</Grid>
								{/* Email Icon */}
								<Grid item>
									<Link href="mailto:gabyshamblin@gmail.com" 
									target="_blank" rel="noopener">
										<CustomIconButton aria-label='Email'>
											<EmailIcon sx={{fontSize: 30}}/>
										</CustomIconButton>
									</Link>
								</Grid>

							</Grid>
						</Grid>

						{/* Content Column */}
						<Grid container item xs spacing={10} direction='column'>
							<Grid item id='about'>
								<About/>
							</Grid>
							<Grid item id='experience'>
								<Experience/>
							</Grid>
							<Grid item id='projects'>
								<Projects/>
							</Grid>
							<Grid item id='contact'>
								<Contact/>
							</Grid>
						</Grid>
					</Grid>

					<div className='spacer'></div>

					<Grid container item justifyContent={{xs:'columnn'}} direction={{xs:'column'}} sx={{textAlign: 'center'}}>

								{/* <Grid item sx={{p:0.5, px:1, mr:0.2}}>
									<Link to="/" 
										onClick={() => setPath('/')} 
										style={{textDecoration: 'none'}}
									>
										<Hidden smDown>
											<MenuText>
													<strong>Home</strong>
											</MenuText>
										</Hidden>
										<Hidden smUp>
											<MenuText sx={{fontSize: 18, minWidth: 70}}>
													<strong>Home</strong>
											</MenuText>
										</Hidden>
									</Link>
								</Grid> */}

								{/* <Grid item sx={{p:0.5, px:1, mr:0.2}}>
									<Link to="/portfolio" 
										onClick={() => setPath('/portfolio')} 
										style={{textDecoration: 'none'}}
									>
										<Hidden smDown>
											<MenuText>
													<strong>Portfolio</strong>
											</MenuText>
										</Hidden>
										<Hidden smUp>
											<MenuText sx={{fontSize: 18, minWidth: 70}}>
													<strong>Portfolio</strong>
											</MenuText>
										</Hidden>
									</Link>
								</Grid> */}

								{/* <Grid item sx={{p:0.5, px:1, mr:0.2}}>
									<Link to="/resume" 
										onClick={() => setPath('/resume')} 
										style={{textDecoration: 'none'}}
									>
										<Hidden smDown>
											<MenuText>
													<strong>Resume</strong>
											</MenuText>
										</Hidden>
										<Hidden smUp>
											<MenuText sx={{fontSize: 18, minWidth: 70}}>
													<strong>Resume</strong>
											</MenuText>
										</Hidden>
									</Link>
								</Grid> */}

								{/* <Grid item sx={{p:0.5, px:1, mr:0.2}}>
									<Link to="/contact" 
										onClick={() => setPath('/contact')} 
										style={{textDecoration: 'none'}}
									>
										<Hidden smDown>
											<MenuText>
													<strong>Contact</strong>
											</MenuText>
										</Hidden>
										<Hidden smUp>
											<MenuText sx={{fontSize: 18, minWidth: 70}}>
													<strong>Contact</strong>
											</MenuText>
										</Hidden>
									</Link>
								</Grid> */}
							</Grid>
				
				</Box>
			</div>
		</React.Fragment>
  );
}

function About () {
	return (
		<React.Fragment>
			<CustomBox sx={{m: 'auto'}}>

				<List dense>
					<ListItem>
						I began programming in 2018 as a curious high school student. Today I'm attending the University of Central Florida for Computer Science and with a focus in mixed reality. I recently graduated with my Bachelor's in December 2023 and am currently working towards my Master's in Computer Science.
					</ListItem>
				</List>
			</CustomBox>
		</React.Fragment>
	);
}

function Experience () {
	return (
		<React.Fragment>
			{/* Job 1 */}
			<CustomBox sx={{m: 'auto'}}>
				<Grid container>
					<Grid item xs={2}>
						<div className='rel'>
							<ListDate>
								April 2024 - Present
							</ListDate>
							<TimelineCircle/>
						</div>
					</Grid>
					<ListGrid item xs pl={2} ml={2} pb={4}>
						<div>
							Virtual Reality Developer | John Hopkins University
						</div>
						<List dense sx={{color: '#bcbcbc'}}>
							<ListItem>
								REPLACE
							</ListItem>
							<ListItem>
								REPLACE
							</ListItem>
							<ListItem>
								REPLACE
							</ListItem>
							<ListItem>
								<SkillChip label='Amazing'/><SkillChip label='Wow'/><SkillChip label='Good job'/>
							</ListItem>
						</List>
					</ListGrid>
				</Grid>
			</CustomBox>

			{/* Job 2 */}
			<CustomBox sx={{m: 'auto'}}>
				<Grid container>
					<Grid item xs={2}>
						<div className='rel'>
							<ListDate>
							June 2023 - August 2023
							</ListDate>
							<TimelineCircle/>
						</div>
					</Grid>
					<ListGrid item xs pl={2} ml={2} pb={4}>
						<div>
							Software Engineering Intern | JP Morgan & Chase
						</div>
						<List dense sx={{color: '#bcbcbc'}}>
							<ListItem>
								Created a user interface for an internal application used by 30,000 users with React.js and Springboot.
							</ListItem>
							<ListItem>
								Communicated with shareholders about project specifications.
							</ListItem>
							<ListItem>
								Tested code using Jest and ensured ADA compliance.
							</ListItem>
							<ListItem>
								<SkillChip label='React.js'/><SkillChip label='Springboot'/><SkillChip label='Jest'/>
							</ListItem>
						</List>
					</ListGrid>
				</Grid>
			</CustomBox>

			{/* Job 3 */}
			<CustomBox sx={{m: 'auto'}}>
				<Grid container>
					<Grid item xs={2}>
						<div className='rel'>
							<ListDate>
								June 2022 - April 2023
							</ListDate>
							<TimelineCircle/>
						</div>
					</Grid>
					<ListGrid item xs pl={2} ml={2} pb={2}>
						<div>
							Full Stack Intern | Epic North LLC
						</div>
						<List dense sx={{color: '#bcbcbc'}}>
							<ListItem>
								Communicated with client to repair website code and optimize website functionality.
							</ListItem>
							<ListItem>
								<SkillChip label='Angular'/><SkillChip label='TypeScript'/><SkillChip label='ASP.NET'/>
								<SkillChip label='SQL'/><SkillChip label='Azure DevOps'/>
							</ListItem>
						</List>
					</ListGrid>
				</Grid>
			</CustomBox>

			<Link href="/resume" underline='none'>
				<div className='link-text'>
					See my resume
				</div>
			</Link>
		</React.Fragment>
	);
}

function Projects () {
	return (
		<React.Fragment>
			{/* Project 1 */}
			<Link href='https://youtu.be/mS35nARSo88?si=TscXleuAKQbuq2yM' target="_blank" rel="noopener" underline='none'>
				<CustomBox link={true} p={2} sx={{m: 'auto', textAlign: 'left'}}>
					<Grid container>
						<Grid item xs={2}>
							<img src={rain} id='thumbnail'/>
						</Grid>	
						<ListGrid item xs project={true} pl={2} ml={2}>
							<div>
								Thunderstorm Simulation
							</div>
							<List dense sx={{color: '#bcbcbc'}}>
								<ListItem>
									A project created for CAP 5727: Realistic Realtime Rendering
								</ListItem>
								<ListItem>
									Designed to mimic a real-world thunderstorm using Unreal Engine 5's Blueprints, Niagara particle system, and Lumen
								</ListItem>
								<ListItem>
									<SkillChip label='Unreal Engine 5'/>
								</ListItem>
							</List>
						</ListGrid>	
					</Grid>
				</CustomBox>
			</Link>

			{/* Project 2 */}
			<Link href="https://youtube.com/playlist?list=PLLAatflC7TYIysXY9DPVkXql6H-apHFQX&si=1AAebMOP9ndXdGL_"
					target="_blank" rel="noopener" underline='none'>
				<CustomBox link={true} p={2} sx={{m: 'auto'}}>
					<Grid container>
						<Grid item xs={2}>
							<img src={ar} id='thumbnail'/>
						</Grid>
						<ListGrid item xs project={true} pl={2} ml={2}>
							<div>
								Augmented Reality Engineering
							</div>
							<List dense sx={{color: '#bcbcbc'}}>
								<ListItem>
									Unity projects on different topics created for CAP 6110: Augmented Reality Engineering
								</ListItem>
								<ListItem>
									Topics include tracking, visual coherence, situated visualization, interaction, navigation, and collaboration
								</ListItem>
								<ListItem>
									<SkillChip label='Unity'/><SkillChip label='C#'/><SkillChip label='Vuforia'/>
								</ListItem>
							</List>
						</ListGrid>
					</Grid>
				</CustomBox>
			</Link>

			{/* Project 3 */}
			<Link href='https://youtu.be/rFd1qQmFYQ0?si=wPxdY7MrYtnJDtDm' target="_blank" rel="noopener" underline='none'>
				<CustomBox link={true} p={2} sx={{m: 'auto'}}>
					<Grid container>
						<Grid item xs={2}>
							<img src={car} id='thumbnail'/>
						</Grid>
						<ListGrid item xs project={true} pl={2} ml={2}>
							<div>
								SenseRator
							</div>
							<List dense sx={{color: '#bcbcbc'}}>
								<ListItem>
									A group project of 5 people for Senior Design.
								</ListItem>
								<ListItem>
									Uses a lidar and a camera to capture the environment.
								</ListItem>
								<ListItem>
									Performs object detection and semantic segmentation on camera data and displays output to user.
								</ListItem>
								<ListItem>
									<SkillChip label='Python'/><SkillChip label='PySimpleGUI'/><SkillChip label='Open3D'/>
								</ListItem>
							</List>
						</ListGrid>
					</Grid>
				</CustomBox>
			</Link>

			<Link href="/portfolio" underline='none'>
				<div className='link-text'>
					See all my projects
				</div>
			</Link>
		</React.Fragment>
	);
}

function Contact () {
	return (
		<React.Fragment>
			{/* Contact Icons */}
			<Grid container item justifyContent='center'>
				{/* Github Icon */}
				<Grid item>
					<Link href="https://github.com/GabyShamblin" 
					target="_blank" rel="noopener">
						<CustomIconButton aria-label='Github'>
							<GitHubIcon sx={{fontSize: 30}}/>
						</CustomIconButton>
					</Link>
				</Grid>
				{/* LinkedIn Icon */}
				<Grid item>
					<Link href="https://www.linkedin.com/in/gabriela-shamblin-7416611b7/" 
					target="_blank" rel="noopener">
						<CustomIconButton aria-label='LinkedIn'>
							<LinkedInIcon sx={{fontSize: 30}}/>
						</CustomIconButton>
					</Link>
				</Grid>
				{/* Youtube Icon */}
				<Grid item>
					<Link href="https://www.youtube.com/channel/UCzyOgtGvN-X7MkaP_amMYNg" 
					target="_blank" rel="noopener">
						<CustomIconButton aria-label='YouTube'>
							<YouTubeIcon sx={{fontSize: 30}}/>
						</CustomIconButton>
					</Link>
				</Grid>
				{/* Email Icon */}
				<Grid item>
					<Link href="mailto:gabyshamblin@gmail.com" 
					target="_blank" rel="noopener">
						<CustomIconButton aria-label='Email'>
							<EmailIcon sx={{fontSize: 30}}/>
						</CustomIconButton>
					</Link>
				</Grid>

			</Grid>

			<Link href="/contact" underline='none'>
				<div className='link-text'>
					Contact me!
				</div>
			</Link>
		</React.Fragment>
	);
}

export default Home;
