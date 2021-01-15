import React from "react";

import { motion } from "framer-motion";
import { pageAnimation } from "../../styles/Animation";

function DefaultHome() {
	return (
		<motion.div
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<h1>Hello Mate!</h1>
		</motion.div>
	);
}

export default DefaultHome;
