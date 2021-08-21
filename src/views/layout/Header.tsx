import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
	header: {
		minHeight: theme.layout.header.height,
		width: '100%',
		top: 0,
		left: 0,
		padding: '0.5em',
		position: 'fixed',
		display: 'grid',
		placeItems: 'center',
		backgroundColor: theme.palette.primary.main,
		'& a': {
			fontSize: '2em',
			fontFamily: theme.typography.fontFamily,
			color: theme.palette.common.white,
		},
	},
}));

export default function Header() {
	const classes = useStyle();
	return (
		<header className={classes.header}>
			<a href="/">{'Conquering Responsive Layouts'}</a>
		</header>
	);
}