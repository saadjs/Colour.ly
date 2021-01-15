import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../../styles/Animation";
import giphy from "./../../styles/images/giphy.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function NotFoundPage() {
	return (
		<Error
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<FontAwesomeIcon icon={faHome} size="4x" />
			<h1 style={{ textAlign: "center" }}>
				<Link to="/">Back to Homepage</Link>
			</h1>
			<img src={giphy} alt="giphy" />
			<p>
				<a href="https://giphy.com/gifs">via GIPHY</a>
			</p>
		</Error>
	);
}

const Error = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	h1 {
		padding: 1rem;
		font-size: 4rem;
	}
`;

export default NotFoundPage;
