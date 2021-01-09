import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Box({ name, background }) {
	console.log(name, background);
	const [copy, setCopy] = useState(false);

	const handleCopy = () => {
		setCopy(true);
		setTimeout(() => setCopy(false), 1500);
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
					<p className="wowThatsLight">{name}</p>
					<p className="wowThatsLight">{background}</p>
				</CopiedText>

				<div>
					<Content>
						<span className="wowThatsDark">{name}</span>
					</Content>
					<CopyButton className="cpy-btn wowThatsLight">
						COPY
					</CopyButton>
				</div>
			</StyledDiv>
		</CopyToClipboard>
	);
}

const StyledDiv = styled.div`
	width: 20%;
	height: 100%;
	display: inline-block;
	position: relative;
	cursor: pointer;
	:hover .cpy-btn {
		opacity: 1;
		transition: 0.5s;
	}
	.wowThatsDark {
		color: white;
	}
	.wowThatsLight {
		color: black;
	}
	.show.overlay-show {
		opacity: 1;
		position: absolute;
		transform: scale(50);
		z-index: 10;
	}
	.copy.overlay-show {
		opacity: 1;
		transform: scale(1);
		z-index: 25;
		transition: all 0.25s ease;
		transition-delay: 0.3s;
	}
`;

const Overlay = styled.div`
	width: 100%;
	height: 100%;
	opacity: 0;
	z-index: 0;
	transition: transform 0.75s ease-in-out;
	transform: scale(0.1);
`;

const Content = styled.div`
	position: absolute;
	width: 100%;
	left: 0;
	bottom: 0;
	padding: 10px;
	color: black;
	letter-spacing: 1px;
	text-transform: uppercase;
	font-size: 12px;
`;

const CopyButton = styled.button`
	all: unset;
	position: absolute;
	display: inline-block;
	width: 100px;
	height: 30px;
	top: 50%;
	left: 50%;
	margin-left: -50px;
	margin-top: -15px;
	text-align: center;
	outline: none;
	background: rgba(255, 255, 255, 0.3);
	font-size: 1rem;
	line-height: 30px;
	color: white;
	text-transform: uppercase;
	opacity: 0;
`;

const CopiedText = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-size: 4rem;
	transform: scale(0.1);
	opacity: 0;
	color: white;
	h1 {
		font-weight: 400px;
		text-transform: uppercase;
		text-shadow: 1px 2px black;
		background: lightblue;
		width: 100%;
		margin-bottom: 0;
		padding: 1rem;
		text-align: center;
	}
	p {
		font-size: 2rem;
		text-transform: uppercase;
		font-weight: 100;
	}
`;

export default Box;
