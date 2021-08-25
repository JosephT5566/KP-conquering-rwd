import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
	style: {
		background: '#23424A',
		'& h1': {
			fontSize: '3rem',
			margin: 0,
			marginBottom: '0.5em',
		},
		'& p': {
			fontSize: '1.3125rem',
			fontWeight: '200',
			margin: 0,
			marginBottom: '3em',
		},
		'& .button': {
			backgroundColor: '#38CFD9',
			padding: '1em 3em',
			borderRadius: '1.5em',
			fontSize: '1.3125rem',
			fontWeight: 'bold',
			color: '#072A2D',
		},

		'& .container': {
			width: '70%',
			color: 'white',
			padding: '9.25rem 6.725rem',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'flex-start',
		},
	},
});

export default function Challenge3() {
	const classes = useStyle();

	return (
		<div className={classes.style}>
			<div className="container">
				<h1>Responsive layouts don’t have to be a struggle </h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam.
				</p>
				<div className={'button'}>I WANT TO LEARN</div>
			</div>
		</div>
	);
}
