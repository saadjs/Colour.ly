import React, { useState } from "react";
import { pageAnimation } from "./../styles/Animation";
import Masony from "react-masonry-component";
import colors from "./util";
import "./../styles/Home.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
	MasonryOptions,
	StyledDiv,
	Overlay,
	CopiedText,
	EachColor,
} from "./../styles/StyledComponents/DefaultHomeStyles";

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
				<h1>COPIED</h1>
			</CopiedText>
			<Masony
				className="masony-container"
				elementType={"ul"}
				gutter={0}
				options={MasonryOptions}
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
									width: "200px",
								}}
							/>
						</CopyToClipboard>
					</li>
				))}
			</Masony>
		</StyledDiv>
	);
}

export default DefaultHome;
