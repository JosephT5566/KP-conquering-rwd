import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
	hero: {
		backgroundColor: '#23424A',
		padding: '100px 0',
		color: 'white',
		'& .container': {
			width: '80%',
			maxWidth: '1100px',
			margin: '0 auto',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-start',
		},
		'& .hero__text': {
			width: '50%',
		},
		'& h1': {
			fontSize: '3rem',
		},
		'& p': {
			fontSize: '1.3125rem',
			marginBottom: '3em',
		},
		'& .button': {
			display: 'inline-block',
			backgroundColor: '#38CFD9',
			padding: '1em 3em',
			borderRadius: '1.5em',
			fontSize: '1.3125rem',
			fontWeight: 'bold',
			color: '#23424A',
		},
	},
});

export default function Challenge3() {
	const classes = useStyle();

	return (
		<div className={classes.hero}>
			<div className="container">
				<div className={'hero__text'}>
					<h1>Responsive layouts don’t have to be a struggle </h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam.
					</p>
					<a href="#" className={'button'}>
						I WANT TO LEARN
					</a>
				</div>
			</div>
		</div>
	);
}
