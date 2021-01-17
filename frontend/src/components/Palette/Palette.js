import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import CopyColor from "./CopyColor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart,
	faClipboard,
	faShare,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import {
	pageAnimation,
	slider,
	sliderContainer,
	detailContainer,
} from "./../styles/Animation";
import {
	StyledDiv,
	MainCommentDiv,
	CommentContainerDiv,
	CommentDiv,
	ShareDiv,
	LikeContainer,
	MainComment,
	Frame1,
	Frame2,
	Frame3,
	Frame4,
	Frame5,
	Frame6,
} from "./../styles/StyledComponents/PaletteStyles";

import { CopyToClipboard } from "react-copy-to-clipboard";

function Palette({ setGetNew, sessionUser }) {
	const [loaded, setLoaded] = useState(false);
	const [colorPalette, setColorPalette] = useState([]);
	const [paletteTitle, setPaletteTitle] = useState("");
	const [createdBy, setCreatedBy] = useState("");
	const [totalLikes, setTotalLikes] = useState("");
	const [creatorId, setCreatorId] = useState("");
	const [pComments, setPComments] = useState([]);
	const [comment, setComment] = useState("");
	const [showComments, setShowComments] = useState(false);
	const [copyURL, setCopyURL] = useState("");

	const { id } = useParams();
	const history = useHistory();
	const url = window.location.href;

	useEffect(() => {
		(async () => {
			const response = await axios.get(`/api/palettes/${id}`);
			const data = response.data;
			setCreatedBy(data.createdBy);
			setCreatorId(data.userId);
			setColorPalette(data.colors);
			setTotalLikes(data.totalLikes);
			setPaletteTitle(data.paletteTitle);
			setPComments(data.comments);
			setLoaded(true);
		})();
	}, [id]);

	if (!loaded) {
		return null;
	}

	const handleLike = async () => {
		if (!sessionUser) history.push("/login");
		const response = await axios.post(`/api/palettes/${id}/like`);
		setTotalLikes(response.data.totalLikes);
		setGetNew(false);
	};
	const handleShowComments = () => {
		if (!sessionUser) history.push("/login");
		setShowComments(!showComments);
	};
	const postComment = async (e) => {
		e.preventDefault();
		if (!sessionUser) history.push("/login");
		const pcRes = await axios.post(`/api/palettes/${id}/comment`, {
			comment,
		});
		setPComments(pcRes.data.comments);
		setComment("");
	};
	const handleCopyURL = () => {
		setCopyURL("Link Copied");
		setTimeout(() => setCopyURL(""), 750);
	};
	const boxes = colorPalette.map((color) => (
		<CopyColor
			key={color.name}
			name={color.name}
			background={color.color}
			handleCopyURL={handleCopyURL}
		/>
	));

	return (
		<StyledDiv
			className="Palette"
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<motion.div variants={sliderContainer}>
				<Frame1 variants={slider}></Frame1>
				<Frame2 variants={slider}></Frame2>
				<Frame3 variants={slider}></Frame3>
				<Frame4 variants={slider}></Frame4>
				<Frame5 variants={slider}></Frame5>
				<Frame6 variants={slider}></Frame6>
			</motion.div>
			<div className="color-box">{boxes}</div>
			<motion.div
				className="created-by"
				variants={detailContainer}
				initial="hidden"
				animate="show"
				exit="exit"
			>
				<div>
					<h2>{paletteTitle}</h2>
					<p>
						Created By:{" "}
						<Link to={`/users/${creatorId}`}>{createdBy}</Link>
					</p>
				</div>
				<LikeContainer>
					<motion.div whileTap={{ scale: 2, rotate: 90 }}>
						<FontAwesomeIcon
							icon={faHeart}
							size="2x"
							className="dil-like-btn"
							onClick={handleLike}
						/>
					</motion.div>
					<p className="total-likes-count">{totalLikes}</p>
					<CommentDiv>
						<motion.div
							whileTap={{
								scale: 2,
							}}
							whileHover={{ scale: 1.5 }}
						>
							<FontAwesomeIcon
								icon={faClipboard}
								size="2x"
								className="comment-icon-btn"
								onClick={handleShowComments}
							/>
						</motion.div>
						<p className="total-comments-count">
							{pComments.length}
						</p>
					</CommentDiv>
					<CopyToClipboard text={url}>
						<ShareDiv
							whileHover={{ scale: 1.5 }}
							onClick={handleCopyURL}
						>
							<FontAwesomeIcon icon={faShare} size="2x" />
							<span>{copyURL}</span>
						</ShareDiv>
					</CopyToClipboard>
				</LikeContainer>

				<MainCommentDiv>
					{showComments && (
						<div>
							<MainComment>
								<div className="innner-ul-comment">
									{pComments.map((comment, i) => (
										<CommentContainerDiv key={i}>
											<ul>
												<li>
													<p>
														<span className="commentor">
															{
																comment.user
																	.username
															}
														</span>
														<span className="actual-comment">
															{comment.comment}
														</span>
													</p>
												</li>
											</ul>
										</CommentContainerDiv>
									))}
								</div>
								<form onSubmit={postComment}>
									<input
										placeholder="notes"
										required
										value={comment}
										onChange={(e) =>
											setComment(e.target.value)
										}
									/>
									<button type="submit">Post note</button>
								</form>
							</MainComment>
						</div>
					)}
				</MainCommentDiv>
			</motion.div>
		</StyledDiv>
	);
}

export default Palette;
