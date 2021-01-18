export const pageAnimation = {
	hidden: {
		// opacity: 0,
		// y: -300,
		scale: 0,
	},
	show: {
		// opacity: 1,
		// y: 0,
		scale: 1,
		transition: {
			duration: 0.5,
			// when: "beforeChildren",
			staggerChildren: 0.25,
		},
	},
	exit: {
		opacity: 0,
		y: 300,
		transition: {
			duration: 0.5,
		},
	},
};
export const titleAnim = {
	hidden: { y: -500 },
	show: {
		y: 0,
		transition: {
			duration: 1,
			ease: "easeOut",
		},
	},
};

export const loginformAnim = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 1 } },
};

export const loginContainer = {
	hidden: { y: 100 },
	show: { y: 0 },
};

export const signupContainer = {
	// hidden: { scale: 0 },
	// show: {
	// 	scale: 1,
	// },
};

export const slider = {
	hidden: {
		x: "-130%",
		skew: "45deg",
	},
	show: {
		x: "200%",
		skew: "0deg",
		transition: { ease: "easeIn", duration: 1 },
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

export const detailContainer = {
	hidden: {
		opacity: 0,
		x: 700,
	},
	show: {
		opacity: 1,
		x: 0,
		transition: { duration: 2, when: "afterParent" },
	},
	exit: {
		x: 700,
	},
};
