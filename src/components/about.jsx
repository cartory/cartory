import '../styles/about.css'

import { Grid } from '@mui/material'
import { Title } from '../components/title'

export const About = ({
	title, image, text, technologies
}) => {
	return (
		<section className="about">
			<Title title={title} />
			<br />
			<div className="">

			</div>
		</section>
	)
}