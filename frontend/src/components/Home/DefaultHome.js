import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../../styles/Animation";
import Masony from "react-masonry-component";
import colors from "./util";
import "./Home.css";

const masonryOptions = {
	fitWidth: false,
	gutter: 10,
	itemSelector: ".photo-item",
};

function DefaultHome() {
	return (
		<motion.div
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<h1>Hello World</h1>
			<Masony
				className={"photo-list"}
				elementType={"ul"}
				options={masonryOptions}
				disableImagesLoaded={false}
				updateOnEachImageLoad={false}
			>
				{colors.map((color) => (
					<li className={`photo-item`}>
						<div
							style={{
								background: color.color,
								height: color.heigth,
								width: color.width,
							}}
						>
							Hola
						</div>
					</li>
				))}
			</Masony>
		</motion.div>
	);
}

export default DefaultHome;
