import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwitchButtons from '../../components/shared/SwitchButtons';

const useStyle = makeStyles({
	style: {
		'& .container': {
			width: '80%',
			maxWidth: '750px',
			margin: '0 auto',
			background: '#23424a',
			color: 'white',
			padding: '50px 0',
		},

		'& .intro-content': {
			width: '50%',
		},
	},
	fixedStyle: {
		'& .container': {
			width: '100%',
			background: '#23424a',
			color: 'white',
			padding: '50px 0',
		},

		'& .intro-content': {
			width: '80%',
			maxWidth: '750px',
			margin: '0 auto',
		},
		'& > h2': {
			width: '80%',
			maxWidth: '750px',
			marginInline: 'auto',
		},
		'& > p': {
			width: '80%',
			maxWidth: '750px',
			marginInline: 'auto',
		},
	},
});

export default function Challenge2() {
	const classes = useStyle();
	const [isFixed, setIsFixed] = useState(false);

	return (
		<div className={!isFixed ? classes.style : classes.fixedStyle}>
			<SwitchButtons isFixed={isFixed} setIsFixed={setIsFixed} />
			<div className="container">
				<div className="intro-content">
					<h1>Lorem ipsum dolor sit.</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aspernatur distinctio
						laudantium dolores. Nulla quibusdam reprehenderit eum sit minus aliquid!
					</p>
				</div>
			</div>

			<h2>more content D:</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, mollitia adipisci magnam
				voluptatibus repellendus fuga ut repellat exercitationem eaque amet, omnis aliquam fugiat laudantium id
				dicta at? Consectetur iure porro illum laudantium excepturi a laborum!
			</p>
			<p>
				Sit magni soluta porro fugit placeat eius itaque, accusamus quisquam voluptates reiciendis pariatur,
				vitae molestiae. Minima, quos reprehenderit autem animi, nisi necessitatibus eligendi quis modi, facilis
				ipsam nihil odit quaerat! Nisi doloribus harum culpa ipsam!
			</p>
			<p>
				Sint corporis animi repudiandae. Aliquid illum, tenetur magnam provident molestiae rem doloremque
				aspernatur quia reiciendis est facilis enim praesentium officia sequi qui debitis exercitationem quaerat
				hic quos recusandae. Architecto repudiandae aperiam tempora iste saepe error.
			</p>
			<p>
				Provident aut suscipit aspernatur doloribus illum assumenda cupiditate perferendis dolores! Obcaecati
				omnis magnam ipsam voluptas ipsa eos explicabo quisquam architecto similique, sunt repellendus animi a
				doloribus ab deserunt. Dicta neque nostrum modi, illum debitis dolorem.
			</p>
		</div>
	);
}
