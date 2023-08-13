import * as React from 'react';
import { Box, Grid, Hidden, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Outlet, Link } from "react-router-dom";

const MenuText = styled(Typography)(() => ({
  minWidth: 100,
	fontSize: 24,
	color: "#a3aab4",
	transition: '0.2s',
	'&:hover': {
		color: "#ffffff",
	}
}));

// var TxtType = function(el, toRotate, period) {
// 	this.toRotate = toRotate;
// 	this.el = el;
// 	this.loopNum = 0;
// 	this.period = parseInt(period, 10) || 2000;
// 	this.txt = '';
// 	this.tick();
// 	this.isDeleting = false;
// };

// TxtType.prototype.tick = function() {
// 	var i = this.loopNum % this.toRotate.length;
// 	var fullTxt = this.toRotate[i];

// 	if (this.isDeleting) {
// 	this.txt = fullTxt.substring(0, this.txt.length - 1);
// 	} else {
// 	this.txt = fullTxt.substring(0, this.txt.length + 1);
// 	}

// 	this.el.innerHTML = '<Typography sx={{fontSize: 30, letterSpacing: 5}}>'+this.txt+'</Typography>';

// 	var that = this;
// 	var delta = 200 - Math.random() * 100;

// 	if (this.isDeleting) { delta /= 2; }

// 	if (!this.isDeleting && this.txt === fullTxt) {
// 		delta = this.period;
// 		this.isDeleting = true;
// 	} else if (this.isDeleting && this.txt === '') {
// 		this.isDeleting = false;
// 		this.loopNum++;
// 		delta = 500;
// 	}

// 	setTimeout(function() {
// 	that.tick();
// 	}, delta);
// };

// window.onload = function() {
// 	var elements = document.getElementsByClassName('typewrite');
// 	for (var i=0; i<elements.length; i++) {
// 			var toRotate = elements[i].getAttribute('data-type');
// 			var period = elements[i].getAttribute('data-period');
// 			if (toRotate) {
// 				new TxtType(elements[i], JSON.parse(toRotate), period);
// 			}
// 	}
// 	// INJECT CSS
// 	var css = document.createElement("style");
// 	css.type = "text/css";
// 	css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
// 	document.body.appendChild(css);
// };

function App() {
	const [path, setPath] = React.useState('');
	if (path !== window.location.pathname) {
		setPath(window.location.pathname);
	}
	
  return (
		<React.Fragment>
			<div className="App-header">
				<Box alignItems='flex-end' sx={{
					display: 'flex', 
					justifyContent: 'center',
					minHeight: 50,
					minWidth: '95%',
					x: 0}}>

					<Grid container justifyContent='space-between' direction={{xs:'column-reverse', sm:'column-reverse', md:'row'}}>
						<Grid container item justifyContent={{xs:'center', sm:'center', md:'flex-start'}} xs={12} sm={12} md={6} sx={{textAlign: 'center'}}>

							<Grid item sx={{p:0.5, px:1, mr:0.2,
								backgroundColor: path === '/' ? '#1e1e1e' : '#26262f'}}>
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
							</Grid>

							<Grid item sx={{p:0.5, px:1, mr:0.2,
								backgroundColor: path === '/portfolio' ? '#1e1e1e' : '#26262f'}}>
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
							</Grid>

							<Grid item sx={{p:0.5, px:1, mr:0.2,
								backgroundColor: path === '/resume' ? '#1e1e1e' : '#26262f'}}>
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
							</Grid>

							<Grid item sx={{p:0.5, px:1, mr:0.2,
								backgroundColor: path === '/contact' ? '#1e1e1e' : '#26262f'}}>
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
							</Grid>
						</Grid>

						<Grid item sx={{textAlign: 'center'}}>
							<Typography sx={{fontSize: 30, letterSpacing: 5}}>
								Gabriela Shamblin
							</Typography>

							{/* <a href="" class="typewrite" data-period="2000" data-type='["Gabriela Shamblin"]'>
								<span class="wrap"></span>
							</a> */}
						</Grid>
					</Grid>
				</Box>

				<Outlet />
			</div>
		</React.Fragment>
  );
}

export default App;
