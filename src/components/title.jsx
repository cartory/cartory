import '../styles/title.css'

export const Title = ({ title }) => {
	return (
		<div>
			<h1 className='section'>/ {title} <span></span></h1>
		</div>
	)
}