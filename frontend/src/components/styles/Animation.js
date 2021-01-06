export const pageAnimation = {
	hidden: {
		opacity: 0,
		y: 300,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			// when: "beforeChildren",
			// staggerChildren: 0.25,
		},
	},
	exit: {
		opacity: 0,
		y: 300,
		transition: {
			duration: 1,
		},
	},
};

export const loginformAnim = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 1 } },
};

export const loginContainer = {
	hidden: { x: 100 },
	show: { x: 0 },
};

export const signupContainer = {
	hidden: { x: -100 },
	show: { x: 0 },
};
