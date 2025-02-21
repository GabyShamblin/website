import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Chip, Grid,	Link, List, ListItem } from '@mui/material';
import './App.css';
import './typing.css';

import projects from './projectData.js';

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

const CustomButton = styled(Button)(() => ({
	minWidth: 100,
	backgroundColor: "rgba(2, 232, 232, 0.2)", 
	color: '#02e8e8', 
	border: '2px solid #02e8e8',
	borderRadius: 50,
	'&:hover': {
		backgroundColor: "rgba(2, 232, 232, 0)",
	}
}));

const ListGrid = styled(Grid)(({project = false}) => ({
	textAlign: 'left', 
	borderLeft: project ? '5px solid rgba(3, 152, 175, 0)' : '5px solid rgba(3, 152, 175, 0.5)',
}));

const SkillChip = styled(Chip)(() => ({
	margin: 3,
	color: '#1efc0f',
	backgroundColor: 'rgba(30, 252, 15, 0.2)',
	border: '2px solid #1efc0f',
}));

const ProjectLink = styled(Link)(() => ({
	color: '#02e8e8', 
	transition: '0.2s',
	'&:hover': {
		color: "#ffffff"
	}
}));



function Portfolio() {
	useEffect(() => {
		document.title = 'Portfolio';
	});

	console.log(projects);

  return (
		<React.Fragment>
			<div className="App">

				<div className='wrapper'>
					<div className='typing-portfolio'>
						/* Projects */
					</div>
				</div>

				{projects.map(p => (
					<ProjectBox project={p}/>
				))}
				
				<div className='spacer'></div>
			</div>
		</React.Fragment>
  );
}

function ProjectBox(props) {
	const project = props.project;

	if (project.media === "") {
		project.media = "placeholder.png";
	}

	return (
		<CustomBox link={true} p={2} sx={{m: 'auto', textAlign: 'left'}}>
			<Grid container>
				<Grid item container xs>
					<Grid item xs={12} sm={2}>
						<img src={require(`./public/thumbnails/${project.media}`)} id='thumbnail' alt='Project picture' class='center'/>
					</Grid>	
					<ListGrid item xs project={true} pl={2} ml={2}>
						<div>
							{project.title} | {project.dates}
						</div>
						<List dense sx={{color: '#bcbcbc'}}>
							{project.description.map(desc => (
								<ListItem>{desc}</ListItem>
							))}
							<ListItem>
								<Grid container>
									{project.skills.map(skill => (
										<Grid item>
											<SkillChip label={skill}/>
										</Grid>
									))}
								</Grid>
							</ListItem>
						</List>
					</ListGrid>	
				</Grid>
				<Grid item container sm={12} md={2} alignItems='center' justifyContent='center'>
					{project.links.map(link => (
						<Grid item sx={{marginLeft: '5px'}}>
							{link.file ? 
							<a href={link.file} download target='_blank' rel="noopener noreferrer">
								<CustomButton>
									{link.label}
								</CustomButton>
							</a>
							:
							<Link href={link.click} target="_blank" rel="noopener">
								<CustomButton>
									{link.label}
								</CustomButton>
							</Link>
							}
						</Grid>
					))}
				</Grid>
			</Grid>
		</CustomBox>
	);
}

export default Portfolio;
