import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwitchButtons from '../../components/shared/SwitchButtons';

const useStyle = makeStyles({
	container: {
		background: '#23424a',
		color: 'white',

		width: '80%',
		margin: '0 auto',

		padding: '2em',
		height: '300px',
	},
	fixedContainer: {
		background: '#23424a',
		color: 'white',

		width: '80%',
		maxWidth: '750px',
		margin: '0 auto',

		padding: '2em',
		'& .intro-content': {
			width: '50%',
		},
	},
});

export default function Day1() {
	const classes = useStyle();
	const [isFixed, setIsFixed] = useState(false);

	return (
		<>
			<SwitchButtons isFixed={isFixed} setIsFixed={setIsFixed} />
			<div className={!isFixed ? classes.container : classes.fixedContainer}>
				<div className="intro-content">
					<h1>Lorem ipsum dolor sit.</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod unde rerum, deleniti ea obcaecati
						sint hic odit dicta tenetur qui ut dolorum provident sit, atque, reprehenderit nulla voluptate!
						Officiis, consectetur?
					</p>
					<p>
						Iste ipsa enim delectus porro, ullam repellendus maiores quis rem debitis cum, necessitatibus
						architecto dolor? Velit, ad quaerat blanditiis veritatis expedita totam vel voluptatem officiis
						officia ab modi voluptatibus obcaecati.
					</p>
					<p>
						Accusantium minima iusto nobis fuga hic explicabo unde illum, perferendis et animi aperiam
						quaerat, eaque deleniti alias blanditiis exercitationem commodi repudiandae ullam consequatur
						incidunt reiciendis repellat officia laboriosam. Esse, modi.
					</p>
					<p>
						Expedita cupiditate iure odit, delectus placeat optio magnam assumenda mollitia aspernatur at
						saepe nisi commodi natus excepturi voluptate. Recusandae nisi dolorem, necessitatibus optio
						aliquam repellat. Adipisci, incidunt. Consequuntur, natus nulla.
					</p>
				</div>
			</div>
		</>
	);
}
