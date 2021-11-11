import '../styles/info.css'

import {
	Email as EmailIcon,
	GitHub as GithubIcon,
	LinkedIn as LinkedInIcon,
} from '@mui/icons-material'

const sections = [
	'home',
	'about',
	'experience',
	'software-creations',
]

const networks = [
	['xXcartoryXx@gmail.com', <EmailIcon />],
	['https://github.com/cartory', <GithubIcon />],
	['https://www.linkedin.com/in/pedro-caricari-3816961b0', <LinkedInIcon />],
]

export const FloatingInfo = () => {
	return (
		<div className='floating'>
			{sections.map((section, index) => {
				return <a key={index} href={`#${section}`}>{`/${section}`}</a>
			})}
			<br />
			<div className='socials'>
				{networks.map(([link, icon], index) => {
					return <a key={index} href={link}>{icon}</a>
				})}
			</div>
		</div>
	)
}