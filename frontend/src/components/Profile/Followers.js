import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../../styles/Animation";
import styled from "styled-components";

function Followers() {
	return (
		<ContainerDiv
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<h1>Followers</h1>
		</ContainerDiv>
	);
}

const ContainerDiv = styled(motion.div)``;

export default Followers;
