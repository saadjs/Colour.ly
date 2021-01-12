import React, { useState } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "framer-motion";

function Box({ name, background }) {
	const [copy, setCopy] = useState(false);

	const handleCopy = () => {
		setCopy(true);
		setTimeout(() => setCopy(false), 1700);
	};

	return (
		<CopyToClipboard text={background} onCopy={handleCopy}>
			<StyledDiv className="Box" style={{ background }}>
				<Overlay
					style={{ background }}
					className={`show ${copy && "overlay-show"}`}
				/>
				<CopiedText className={`copy ${copy && "overlay-show"}`}>
					<h1>Copied!</h1>
					<p>{name}</p>
					<p>{background}</p>
				</CopiedText>

				<div className="color-name-copy-btn">
					<Content>
						<span className="wowThatsDark">{name}</span>
						<br />
						<span>{background}</span>
					</Content>
					<CopyButton
						className="cpy-btn wowThatsLight"
						whileHover={{ scale: 2, rotate: 360 }}
					>
						COPY
					</CopyButton>
				</div>
			</StyledDiv>
		</CopyToClipboard>
	);
}

const StyledDiv = styled.div`
	cursor: pointer;
	height: 100%;
	width: 20%;
	display: inline-block;
	position: relative;
	:hover .cpy-btn {
		opacity: 1;
	}
	.show.overlay-show {
		opacity: 1;
		position: absolute;
		transform: rotate(1turn);
		z-index: 10;
	}
	.copy.overlay-show {
		opacity: 1;
		transform: scale(1);
		z-index: 10;
		transition-delay: 0.3s;
	}
`;

const Overlay = styled.div`
	width: 100%;
	height: 100%;
	opacity: 0;
	z-index: 0;
	transition: transform 0.75s ease-in-out;
`;

const Content = styled.div`
	position: absolute;
	width: 100%;
	left: 0;
	bottom: 1rem;
	padding: 10px;
	text-transform: uppercase;
	text-align: center;
	span {
		color: black;
	}
`;

const CopyButton = styled(motion.button)`
	border: 1px solid black;
	position: absolute;
	display: inline-block;
	width: 8rem;
	height: 4rem;
	top: 50%;
	left: 50%;
	margin-left: -60px;
	margin-top: -15px;
	text-align: center;
	background: rgba(69, 50, 50, 0.3);
	color: white;
	text-transform: uppercase;
	opacity: 0;
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
		background: #0227f7;
		width: 100%;
		text-align: center;
	}
	p {
		font-size: 2rem;
		text-transform: uppercase;
	}
`;

export default Box;
