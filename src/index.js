import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home.js";
import Portfolio from "./pages/Portfolio.js";
import Heart from "./pages/Heart.js";
import Resume from "./pages/Resume.js";
import Contact from "./pages/Contact.js";
import NoPage from "./pages/NoPage.js";

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
				<Route path="*" element={<NoPage />} />
			</Route>
		</Routes>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
