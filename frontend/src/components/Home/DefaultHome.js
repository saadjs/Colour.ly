import React, { useState } from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../../styles/Animation";
import Masony from "react-masonry-component";
import colors from "./util";
import "./Home.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";

const masonryOptions = {
	fitWidth: false,
	gutter: 5,
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
				<h1>Hey there!</h1>
				<p>The best colour in the world is your favorite one!!!</p>
				<p>
					Let's find that..... <span>Shall We?</span>
				</p>
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
					<li className="photo-item" id="mapped-li" key={color.color}>
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
		flex-direction: column;
		h1 {
			color: #42309c;
			text-align: center;
			font-size: 3rem;
			font-family: "Kaushan Script", cursive;
		}
		p {
			color: #0c798e;
			font-size: 2rem;
			font-family: "Kaushan Script", cursive;
			span {
				color: #42309c;
			}
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
	left: auto;
	right: auto;
	border-radius: 10px;
	flex-direction: column;
	justify-content: flex-end;
	p {
		align-self: center;
		background: whitesmoke;
		border-radius: 5px;
		-webkit-box-shadow: 0 0 15px 2px black;
		-moz-box-shadow: 0 0 15px 2px black;
		box-shadow: 0 0 15px 2px black;
		padding: 2px;
		font-size: 14px;
	}
`;

export default DefaultHome;
