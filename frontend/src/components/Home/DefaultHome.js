import React, { useState } from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../../styles/Animation";
import Masony from "react-masonry-component";
import colors from "./util";
import "./Home.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
import colourlyImg from "./../../styles/images/colourly.jpeg";

const masonryOptions = {
	fitWidth: false,
	gutter: 10,
	itemSelector: ".photo-item",
};

function DefaultHome() {
	const [copy, setCopy] = useState(false);

	const handleCopy = () => {
		setCopy(true);

		setTimeout(() => setCopy(false), 1700);
	};

	return (
		<StyledDiv
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<Overlay className={`show ${copy && "overlay-show"}`} />
			<CopiedText className={`copy ${copy && "overlay-show"}`}>
				<h1>Color Copied!</h1>
			</CopiedText>
			<div className="logo-container">
				<h1>Welcome to Colour.ly</h1>
			</div>

			<Masony
				className="masony-container"
				elementType={"ul"}
				gutter={0}
				options={masonryOptions}
				disableImagesLoaded={false}
				updateOnEachImageLoad={false}
			>
				{colors.map((color) => (
					<li className="photo-item" id="mapped-li">
						<CopyToClipboard text={color.color} onCopy={handleCopy}>
							<EachColor
								whileHover={{ scale: 1.2, zIndex: 1 }}
								whileTap={{
									scale: 0.8,
									rotate: -90,
								}}
								style={{
									background: color.color,
									height: color.heigth,
									width: color.width,
								}}
							>
								<p>{color.color}</p>
							</EachColor>
						</CopyToClipboard>
					</li>
				))}
			</Masony>
		</StyledDiv>
	);
}
const StyledDiv = styled(motion.div)`
	cursor: copy;
	background-color: #fdf5e6;
	.logo-container {
		cursor: initial;
		height: 10rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(
				217deg,
				rgba(255, 0, 0, 0.8),
				rgba(255, 0, 0, 0) 70.71%
			),
			linear-gradient(
				127deg,
				rgba(0, 255, 0, 0.8),
				rgba(0, 255, 0, 0) 70.71%
			),
			linear-gradient(
				336deg,
				rgba(0, 0, 255, 0.8),
				rgba(0, 0, 255, 0) 70.71%
			);
		h1 {
			text-align: center;
			font-size: 3rem;
		}
	}
	.show.overlay-show {
		opacity: 1;
		z-index: 10;
	}
	.copy.overlay-show {
		opacity: 1;
		transform: scale(1);
		z-index: 10;
		transition-delay: 0.3s;
	}
	.masony-container {
		width: 90%;
		margin: 1rem auto;
	}
`;

const Overlay = styled.div`
	width: 100%;
	height: 100%;
	opacity: 0;
	z-index: 0;
	transition: transform 0.75s ease-in-out;
`;
const CopiedText = styled(motion.div)`
	opacity: 0;

	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-size: 4rem;
	transform: scale(0.1);
	color: white;
	h1 {
		text-transform: uppercase;
		background: #a600bf;
		width: 100%;
		text-align: center;
	}
`;

const EachColor = styled(motion.div)`
	display: flex;
	border-radius: 10px;
	flex-direction: column;
	justify-content: flex-end;
	p {
		align-self: center;
		background: whitesmoke;
		padding: 5px;
	}
`;

export default DefaultHome;
