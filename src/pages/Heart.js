import * as React from 'react';
import { useEffect } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import { Box, Grid, Hidden, Typography } from '@mui/material';
import { flexbox } from '@mui/system';
import { styled } from '@mui/material/styles';

import heart from './public/thumbnails/heart.jpg';

function Heart() {
	useEffect(() => {
		document.title = 'Heart WebGL Player';
	});

	var path = "public/unity/";
	const {unityProvider, loadingProgress} = useUnityContext({
		loaderUrl: path + "Build/MedicalVisualization.loader.js",
		dataUrl: path + "Build/MedicalVisualization.data",
		frameworkUrl: path + "Build/MedicalVisualization.framework.js",
		codeUrl: path + "Build/MedicalVisualization.wasm",
		streamingAssetsUrl: path + "StreamingAssets",
		companyName: "Gabriela Shamblin",
		productName: "Heart Visualization Project",
		productVersion: "1.0",
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