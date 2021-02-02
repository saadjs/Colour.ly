import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const Toggle = ({ theme, toggleTheme }) => {
	return (
		<ThemeToggler>
			<Button onClick={toggleTheme} variant="dark">
				{theme === "light" ? "Switch to Dark Mode" : "Back to Light"}
			</Button>
		</ThemeToggler>
	);
};

const ThemeToggler = styled.p`
	position: absolute;
	right: 1rem;
`;

Toggle.propTypes = {
	theme: string.isRequired,
	toggleTheme: func.isRequired,
};
export default Toggle;
