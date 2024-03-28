import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import VizSensor from 'react-visibility-sensor';
import { Box, Button, Chip, Grid, Grow, Hidden, Typography, 
	Link, List, ListItem } from '@mui/material';
// import SkillSlider from './SkillSlider';
import { flexbox } from '@mui/system';
import './typing.css';

import { experience, education, skills, certs } from './resumeData.js';

import CircleIcon from '@mui/icons-material/Circle';
import FeedIcon from '@mui/icons-material/Feed';
import resume from './public/Gabriela Shamblin Resume.pdf';



const MenuText = styled(Typography)(() => ({
  width: 150,
	margin: 'auto',
	fontSize: 20,
	color: "#a3aab4",
	textAlign: 'center',
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
	margin: 'auto',
	backgroundColor: '#a3aab4',
	transition: '0.2s',
}));

const ResumeButton = styled(Button)(() => ({
	minWidth: 250,
  backgroundColor: "#a8659d", 
	color: "#000000", 
	borderRadius: 50,
	'&:hover': {
		backgroundColor: "rgba(194, 194, 194)", 
		borderColor: "#000000", 
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

const LogoCircle = styled('div')(() => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: 'white',
	height: '75px',
  width: '75px',
	borderRadius: 50
}));

function Resume() {
	useEffect(() => {
		document.title = 'Resume';
	});

  return (
		<div className="App">

			<div className='wrapper'>
				<div className='typing-resume'>
					/* Resume */
				</div>
			</div>

			<a href={resume} download target='_blank' rel="noopener noreferrer">
				<MenuText>
					<strong>PDF Version</strong>
					<MenuLine chars={11}/>
				</MenuText>
			</a>

			{/* Education */}
			<CustomBox p={2} sx={{m: 'auto', textAlign: 'left'}}>

				<Typography variant='h2' sx={{fontSize: 24, letterSpacing: 5, p: 2, pt: 5}}>
					Education
				</Typography>

				{education.map(degree => (
					<TimelineDegree degree={degree}/>
				))}

			</CustomBox>

			{/* Experience */}
			<CustomBox p={2} sx={{m: 'auto', textAlign: 'left'}}>

				<Typography variant='h2' sx={{fontSize: 24, letterSpacing: 5, p: 2}}>
					Experience
				</Typography>

				{experience.map(job => (
					<TimelineJob job={job}/>
				))}

			</CustomBox>

			{/* Skills */}
			<CustomBox p={2} sx={{m: 'auto', textAlign: 'left'}}>

				<Typography variant='h2' sx={{fontSize: 24, letterSpacing: 5, p: 2}}>
					Skills
				</Typography>

				<Grid container spacing={1.5} justifyContent='center'>
					{skills.map(skill => (
						<Logo skill={skill}/>
					))}
				</Grid>

				<CustomBox sx={{display:'flex', m: 'auto', mb: 1, p: 1, justifyContent:'center'}}>

					<Grid container spacing={1.5} justifyContent='center'>
						<Grid item>
							<Link href={certs[0].link} target="_blank" rel="noopener" style={{textDecoration:"none"}}>
								<img id='cert' src={require(`./public/logos/aws.png`)} alt={certs[0].name}/>
								<Typography>{certs[0].name}</Typography>
							</Link>
						</Grid>
					</Grid>

				</CustomBox>

			</CustomBox>

			<div className='spacer'></div>

		</div>
  );
}

function TimelineJob(props) {
	const job = props.job;

	return (
		<CustomBox sx={{m: 'auto'}}>
			<Grid container>
				<Grid item xs={2}>
					<div className='rel'>
						<ListDate>
							{job.dates}
						</ListDate>
						<TimelineCircle/>
					</div>
				</Grid>
				<ListGrid item xs pl={2} ml={2} pb={4}>
					<div>
						{job.title} | {job.company}
					</div>
					<List dense sx={{color: '#bcbcbc'}}>
						{job.description.map(desc => (
							<ListItem>
								{desc}
							</ListItem>
						))}
						<ListItem>
							{job.skills.map(skill => (
								<SkillChip label={skill}/>
							))}
						</ListItem>
					</List>
				</ListGrid>
			</Grid>
		</CustomBox>
	);
}

function TimelineDegree(props) {
	const degree = props.degree;

	return (
		<CustomBox sx={{m: 'auto'}}>
			<Grid container>
				<Grid item xs={2}>
					<div className='rel'>
						<ListDate>
							{degree.graduation}
						</ListDate>
						<TimelineCircle/>
					</div>
				</Grid>
				<ListGrid item xs pl={2} ml={2} pb={4}>
					<div>
						{degree.degree} | {degree.school}
					</div>
					<List dense sx={{color: '#bcbcbc'}}>
						<ListItem>
							{degree.gpa}
						</ListItem>
					</List>
				</ListGrid>
			</Grid>
		</CustomBox>
	);
}

function Logo(props) {
	const skill = props.skill;

	if (skill.media == "") {
		skill.media = "placeholder.png";
	}

	return (
		<Grid item sx={{textAlign: 'center'}}>
			{skill.background ? (
				<LogoCircle>
					<img id='logo' src={skill.media} alt={skill.name}/>
				</LogoCircle>) : (
				<img id='logo' src={skill.media} alt={skill.name}/>
			)}
			<Typography>{skill.name}</Typography>
		</Grid>
	)
}

export default Resume;
