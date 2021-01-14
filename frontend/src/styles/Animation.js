export const pageAnimation = {
	hidden: {
		opacity: 0,
		y: -300,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.75,
			// when: "beforeChildren",
			staggerChildren: 0.25,
		},
	},
	exit: {
		opacity: 0,
		y: 300,
		transition: {
			duration: 0.75,
		},
	},
};

export const titleAnim = {
	hidden: { x: -200 },
	show: {
		x: 0,
		transition: {
			duration: 0.75,
			ease: "easeOut",
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

export const slider = {
	hidden: {
		x: "-130%",
		skew: "45deg",
	},
	show: {
		x: "200%",
		skew: "0deg",
		transition: { ease: "easeIn", duration: 1.5 },
	},
};

export const sliderContainer = {
	hidden: { opacity: 1 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.15, ease: "easeOut" },
	},
};

export const photoAnim = {
	hidden: {
		scale: 2,
		opacity: 0,
	},
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 260,
			damping: 20,
		},
	},
};
