import "../styles/about.css";

import { Title } from "../components/title";

export const About = ({ title, image, text, technologies }) => {
	return (
		<>
			<div className="section-title">
				<Title title={title} />
			</div>
			<section id="about" className="about">
				<div>
					<p>
						{text.map((t, index) => {
							if (index === 0) {
								return (
									<>
										{t[0]} <strong>{t[1]}</strong> {t[2]}
									</>
								);
							}

							return t
						})}
					</p>
					<ul className="techno-list">
						{technologies.map((tech) => {
							return <li>{tech}</li>;
						})}
					</ul>
				</div>
				<img src={image} alt="profile" />
			</section>
		</>
	);
};
