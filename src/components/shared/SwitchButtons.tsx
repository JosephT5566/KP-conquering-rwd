import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

interface Props {
	isFixed: boolean;
	setIsFixed: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SwitchButtons({ isFixed, setIsFixed }: Props) {
	return (
		<ButtonGroup style={{ marginBlock: '1em' }}>
			<Button color={'primary'} variant={isFixed ? 'outlined' : 'contained'} onClick={() => setIsFixed(false)}>
				{'Error'}
			</Button>
			<Button color={'primary'} variant={isFixed ? 'contained' : 'outlined'} onClick={() => setIsFixed(true)}>
				{'Fixed'}
			</Button>
		</ButtonGroup>
	);
}
