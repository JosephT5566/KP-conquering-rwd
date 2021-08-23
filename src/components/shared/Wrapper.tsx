import React, { ReactNode } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export class DailyInfo {
	id: string;
	title: string;
	subTitle: string;
	description: string;
	constructor(id: string, title: string, subTitle: string, description: string) {
		this.id = id;
		this.title = title;
		this.subTitle = subTitle;
		this.description = description;
	}
}

const useStyle = makeStyles({
	dailyChallengeWrapper: {
		marginBlock: '2em',
	},
});

export const DailyChallengeWrapper = (props: { info: DailyInfo; children: ReactNode }) => {
	const { info, children } = props;
	const classes = useStyle();

	return (
		<div id={info.id} className={classes.dailyChallengeWrapper}>
			<Typography variant={'h1'}>{info.title}</Typography>
			<Typography variant={'h2'}>{info.subTitle}</Typography>
			<Typography variant={'body1'}>{info.description}</Typography>
			{children}
		</div>
	);
};
