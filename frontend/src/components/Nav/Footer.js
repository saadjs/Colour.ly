import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faAngellist,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

function Footer() {
	return (
		<FooterDiv>
			<div>
				<FontAwesomeIcon icon={faCopyright} />
				<p>2021 Saad Shaikh All Rights Reserved</p>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/saadshaikh18/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faLinkedin} size="2x" />
				</a>
				<a
					href="https://angel.co/u/saad-shaikh-9"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faAngellist} size="2x" />
				</a>
				<a
					href="https://github.com/saadjs/Colour.ly"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faGithub} size="2x" />
				</a>
			</div>
		</FooterDiv>
	);
}

const FooterDiv = styled.div`
	padding: 0 1rem;
	background-color: #c4ffb2;
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
			font-size: 14px;
			font-style: italic;
		}
		a {
			margin-left: 2rem;
		}
	}
`;

export default Footer;
