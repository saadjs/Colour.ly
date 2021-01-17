import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

// Redux stuff
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

// style stuff
import { motion } from "framer-motion";
import colourly from "./../../styles/images/colourly.jpeg";
import { StyledNav, ActivePath } from "./../styles/StyledComponents/NavStyles";
import SearchResult from "../Home/SearchResult";

function Nav({ sessionUser }) {
	const [searchWords, setSearchWords] = useState("");
	const [searchResults, setSearchResults] = useState({
		palettes: [],
		users: [],
	});
	const [showModal, setShowModal] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();
	const { pathname } = useLocation();

	//* handle logout button press
	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(sessionActions.logout());
		history.push("/login");
	};

	const handleSearch = async (e) => {
		e.preventDefault();
		const response = await axios.post(`/api/palettes/search`, {
			data: searchWords,
		});
		setSearchResults(response.data);
		setSearchWords("");
		setShowModal(true);
	};

	//? generate links based on user logged in status
	let sessionLinks;
	if (!sessionUser) {
		sessionLinks = (
			<>
				<li>
					<NavLink to="/login">Log In</NavLink>
					<ActivePath
						transition={{ duration: 0.75 }}
						initial={{ width: "0%" }}
						animate={{
							width: pathname === "/login" ? "3.75rem" : "0%",
						}}
					/>
				</li>
				<li>
					<NavLink to="/signup">Sign Up</NavLink>
					<ActivePath
						transition={{ duration: 0.75 }}
						initial={{ width: "0%" }}
						animate={{
							width: pathname === "/signup" ? "5rem" : "0%",
						}}
					/>
				</li>
			</>
		);
	} else {
		sessionLinks = (
			<>
				<li className="search-form-container">
					<form onSubmit={handleSearch} className="search-form">
						<input
							type="text"
							placeholder="search palettes or users"
							value={searchWords}
							onChange={(e) => setSearchWords(e.target.value)}
						/>
					</form>
				</li>
				<li>
					<NavLink exact to="/palettes">
						Explore Palettes
					</NavLink>
					<ActivePath
						transition={{ duration: 0.75 }}
						initial={{ width: "0%" }}
						animate={{
							width: pathname === "/palettes" ? "9.75rem" : "0%",
						}}
					/>
				</li>
				<li>
					<NavLink exact to="/palettes/create">
						Create Palette
					</NavLink>
					<ActivePath
						transition={{ duration: 0.75 }}
						initial={{ width: "0%" }}
						animate={{
							width:
								pathname === "/palettes/create" ? "9rem" : "0%",
						}}
					/>
				</li>
				<li>
					<NavLink exact to={`/users/${sessionUser.id}/favorites`}>
						Favorites
					</NavLink>
					<ActivePath
						transition={{ duration: 0.75 }}
						initial={{ width: "0%" }}
						animate={{
							width:
								pathname ===
								`/users/${sessionUser.id}/favorites`
									? "5.5rem"
									: "0%",
						}}
					/>
				</li>
				<li>
					<NavLink to={`/users/${sessionUser.id}`}>
						<FontAwesomeIcon icon={faUser} size="lg" />
					</NavLink>
					<ActivePath
						transition={{ duration: 0.75 }}
						initial={{ width: "0%" }}
						animate={{
							width:
								pathname === `/users/${sessionUser.id}`
									? "1.70rem"
									: "0%",
						}}
					/>
				</li>
				<li className="logout-li" onClick={handleLogout}>
					Logout
				</li>
			</>
		);
	}

	return (
		<StyledNav>
			<NavLink to="/">
				<motion.img
					src={colourly}
					alt=""
					style={{ width: 150 }}
					whileHover={{ scale: 2 }}
					whileTap={{ rotate: -90 }}
				/>
			</NavLink>
			<ul>{sessionLinks}</ul>
			<SearchResult
				showModal={showModal}
				setShowModal={setShowModal}
				searchResults={searchResults}
			/>
		</StyledNav>
	);
}

export default Nav;
