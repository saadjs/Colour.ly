import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const Toggle = ({ theme, toggleTheme }) => {
	return (
		<ThemeToggler>
			<Button
				onClick={toggleTheme}
				variant="dark"
				className="theme-toggle-button"
			>
				{theme === "light" ? "Go Dark" : "Back to Light"}
			</Button>
			<span>(beta feature)</span>
		</ThemeToggler>
	);
};

const ThemeToggler = styled.div`
	position: absolute;
	top: 12%;
	right: 0;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	span {
		padding: 0 1rem;
	}
	@media (max-width: 1500px) {
		top: 20%;
	}
`;

Toggle.propTypes = {
	theme: string.isRequired,
	toggleTheme: func.isRequired,
};
export default Toggle;
