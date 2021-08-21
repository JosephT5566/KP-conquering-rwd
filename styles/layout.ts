export interface ILayout {
	navbar: {
		height: string;
	};
	footer: {
		height: string;
	};
}

export const layout = {
	navbar: {
		height: '80px',
	},
	footer: {
		height: '115px',
	},
} as ILayout;
