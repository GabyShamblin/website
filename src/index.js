import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Heart from "./pages/Heart";
import SenseRator from "./pages/SenseRator";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} >
				<Route index element={<Home />} />
				<Route path="portfolio" element={<Portfolio />} />
				<Route path="resume" element={<Resume />} />
				<Route path="contact" element={<Contact />} />
				<Route path="heart" element={<Heart />} />
				<Route path="senserator" element={<SenseRator />} />
				<Route path="*" element={<NoPage />} />
			</Route>
		</Routes>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
