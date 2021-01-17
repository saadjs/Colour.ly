import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledNav = styled.nav`
	min-height: 10vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 5rem;
	background-color: #fffa65;
	font-size: 1.5rem;
	.search-form-container {
	}
	.search-form {
		input {
			border: 2px solid #fffa65;
		}
		input,
		input::-webkit-input-placeholder {
			font-size: 1rem;
			border-radius: 10px;
			width: 25rem;
			font-family: "Kaushan Script", cursive;
		}
	}
	button {
		padding: 2px;
		color: #487eb0;
	}
	a {
		color: #487eb0;
		text-decoration: none;
		font-family: "Kaushan Script", cursive;
	}
	ul {
		margin: 0;
		display: flex;
		list-style: none;
		align-items: center;
		.logout-li {
			all: unset;
			cursor: pointer;
			margin-left: 3rem;
			color: #487eb0;
			font-family: "Kaushan Script", cursive;
			:hover {
				color: red;
				transform: scale(1.2);
			}
		}
	}
	li {
		padding-left: 3rem;
		font-family: "Kaushan Script", cursive;
	}
	@media (max-width: 1500px) {
		flex-direction: column;
		padding: 2rem 1rem;
		ul {
			justify-content: space-around;
			width: 100%;
			li {
				padding: 0;
			}
		}
	}
`;

export const ActivePath = styled(motion.div)`
	height: 0.3rem;
	background: #bb3b2c;
	width: 0;
	position: absolute;
`;
