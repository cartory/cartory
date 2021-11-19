import "../styles/intro.css";
import logo from "../assets/logo.svg";

import { Email as EmailIcon } from "@mui/icons-material";

import { Button } from "@mui/material";

export const Intro = ({ title, subtitle, description }) => {
	return (
		<section id="home" className="intro">
			<img src={logo} alt="logo" />
			<div>
				<h1 className="title typewriter">
					{title[0]} <strong>{title[1]}</strong>
					{title[2]}
				</h1>
			</div>
			<h2 className="subtitle">{subtitle}</h2>
			<p>{description}</p>
			<br />
			<Button variant="outlined" className="button" startIcon={<EmailIcon />} onClick={() => document.getElementById("email").click()}>
				Say Hello
			</Button>
		</section>
	);
};
