import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
	ColorColumnDiv,
	Overlay,
	Content,
	CopyButton,
	CopiedText,
} from "./../styles/StyledComponents/CopyColorStyles";

function CopyColor({ name, background }) {
	const [copy, setCopy] = useState(false);

	const handleCopy = () => {
		setCopy(true);

		setTimeout(() => setCopy(false), 1700);
	};

	return (
		<CopyToClipboard text={background} onCopy={handleCopy}>
			<ColorColumnDiv className="Box" style={{ background }}>
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
			</ColorColumnDiv>
		</CopyToClipboard>
	);
}

export default CopyColor;
