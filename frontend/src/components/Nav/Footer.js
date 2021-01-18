import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

function Footer() {
	return (
		<FooterDiv>
			<div>
				<FontAwesomeIcon icon={faCopyright} />
				<p>2021 Saad Shaikh All Rights Reserved</p>
			</div>
			<a
				href="https://github.com/saadjs/Colour.ly"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faGithub} size="2x" />
			</a>
		</FooterDiv>
	);
}

const FooterDiv = styled.div`
	padding: 0 1rem;
	background-color: #fffa65;
	position: fixed;
	bottom: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	div {
		display: flex;
		align-items: center;
		p {
			padding-left: 5px;
			font-style: italic;
		}
	}
`;

export default Footer;
