import React from "react";
import Masony from "react-masonry-component";
import { motion } from "framer-motion";
import "./Home.css";
import { pageAnimation } from "../../styles/Animation";
import { PHOTOS } from "./util";

const masonryOptions = {
	fitWidth: false,
	columnWidth: 300,
	gutter: 1,
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
			<h1 style={{ textAlign: "center" }}>Hello Mate</h1>
			<Masony
				className={"photo-list"}
				elementType={"ul"}
				options={masonryOptions}
				disableImagesLoaded={false}
				updateOnEachImageLoad={false}
			>
				{PHOTOS.map((photo, i) => (
					<motion.li
						className={`photo-item`}
						key={i}
						initial={{ scale: 0 }}
						animate={{ rotate: 360, scale: 1 }}
						transition={{
							type: "spring",
							// stiffness: 20,
							damping: 50,
						}}
					>
						<img src={photo.imageUrl} alt="pic" />
					</motion.li>
				))}
			</Masony>
		</motion.div>
	);
}

export default DefaultHome;
