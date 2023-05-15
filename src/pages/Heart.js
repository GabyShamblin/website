import * as React from 'react';
import { useEffect } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import { Box, Grid, Hidden, Typography } from '@mui/material';
import { flexbox } from '@mui/system';
import { styled } from '@mui/material/styles';
import './App.css';

import heart from './public/heart.jpg';

function Heart() {
	useEffect(() => {
		document.title = 'Heart WebGL Player';
	});

	var path = "unity/";
	var container = document.querySelector("#unity-container");
	var canvas = document.querySelector("#unity-canvas");
	var loadingBar = document.querySelector("#unity-loading-bar");
	var progressBarFull = document.querySelector("#unity-progress-bar-full");
	var fullscreenButton = document.querySelector("#unity-fullscreen-button");
	var warningBanner = document.querySelector("#unity-warning");

	// Shows a temporary message banner/ribbon for a few seconds, or
	// a permanent error message on top of the canvas if type=='error'.
	// If type=='warning', a yellow highlight color is used.
	// Modify or remove this function to customize the visually presented
	// way that non-critical warnings and error messages are presented to the
	// user.
	function unityShowBanner(msg, type) {
		function updateBannerVisibility() {
			warningBanner.style.display = warningBanner.children.length ? 'block' : 'none';
		}
		var div = document.createElement('div');
		div.innerHTML = msg;
		warningBanner.appendChild(div);
		if (type == 'error') div.style = 'background: red; padding: 10px;';
		else {
			if (type == 'warning') div.style = 'background: yellow; padding: 10px;';
			setTimeout(function() {
				warningBanner.removeChild(div);
				updateBannerVisibility();
			}, 5000);
		}
		updateBannerVisibility();
	}

	var buildUrl = "unity/Build";
	var {unityProvider, loadingProgress} = useUnityContext({
		loaderUrl: buildUrl + "/Medical Visualization.loader.js",
		dataUrl: buildUrl + "/Medical Visualization.data",
		frameworkUrl: buildUrl + "/Medical Visualization.framework.js",
		codeUrl: buildUrl + "/Medical Visualization.wasm",
		// streamingAssetsUrl: path + "StreamingAssets",
		// companyName: "Gabriela Shamblin",
		// productName: "Heart Visualization Project",
		// productVersion: "1.0",
		// showBanner: unityShowBanner,
	});

  return (
		<React.Fragment>
			<div className="App">
				<p>Loading Application... {Math.round(loadingProgress * 100)}%</p>
				<Unity unityProvider={unityProvider}/>
			</div>
		</React.Fragment>
  );
}

export default Heart;
