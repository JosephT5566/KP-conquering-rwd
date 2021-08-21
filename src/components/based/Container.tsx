import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
	children: ReactNode;
}

const useStyle = makeStyles((theme) => ({
	container: {
		minHeight: '100vh',
		paddingTop: theme.layout.header.height,
		backgroundColor: theme.palette.background.default,
	},
}));

export default function Container({ children }: Props) {
	const classes = useStyle();
	return <div className={classes.container}>{children}</div>;
}
