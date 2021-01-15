import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import axios from "axios";

//* Global Styles: styled-component
import GlobalStyle from "./styles/GlobalStyle";

//* Components
import LoginFormPage from "./components/UserAuth/LoginForm";
import SignupFormPage from "./components/UserAuth/SignupForm";
import Nav from "./components/Nav/Nav";
import PaletteHome from "./components/Home/PaletteHome";
import Palette from "./components/Palette/Palette";
import NewPalette from "./components/CreatePalette/NewPalette";
import User from "./components/Profile/User";
import Favorite from "./components/Profile/Favorite";
// import DefaultHome from "./components/Home/DefaultHome";
import TestMason from "./components/Home/TestMason";
import { myImages } from "./components/Home/util";

//* Redux
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "./store/session";

//* Page Transitions
import { AnimatePresence } from "framer-motion";

function App() {
	const dispatch = useDispatch();

	//? Different States
	const [authenticated, setAuthenticated] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const [colorCombos, setColorCombos] = useState([]);
	const [popularCombos, setPopularCombos] = useState([]);
	const [getNew, setGetNew] = useState(false);

	//* Get current user
	const sessionUser = useSelector((state) => state.session.user);

	//? need a current url/location for page transitions
	const location = useLocation();

	useEffect(() => {
		dispatch(sessionActions.restoreUser()).catch((res) => {
			if (!res.errors) setAuthenticated(true);
		});
		(async () => {
			const response = await axios.get("/api/palettes");
			const popRes = await axios.get("/api/palettes/popular");
			const data = response.data;
			setColorCombos(data);
			setPopularCombos(popRes.data);
			setGetNew(true);
			setLoaded(true);
		})();
	}, [authenticated, dispatch, getNew]);

	//! return null if the useEffect hasn't run
	if (!loaded) {
		return null;
	}
	let brakePoints = [350, 500, 750];
	// let images = [];
	// const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92, 643];
	// for (let i = 0; i < imgId.length; i++) {
	// 	const ih = 200 + Math.floor(Math.random() * 10) * 15;
	// 	images.push("https://unsplash.it/250/" + ih + "?image=" + imgId[i]);
	// }

	return (
		<>
			<GlobalStyle />
			<Nav sessionUser={sessionUser} />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route exact path="/palettes">
						<PaletteHome
							colorCombos={colorCombos}
							popularCombos={popularCombos}
						/>
					</Route>
					<Route exact path="/palettes/create">
						<NewPalette
							sessionUser={sessionUser}
							colorCombos={colorCombos}
							setGetNew={setGetNew}
						/>
					</Route>
					<Route exact path="/users/:userId">
						<User sessionUser={sessionUser} setGetNew={setGetNew} />
					</Route>
					<Route exact path="/users/:userId/favorites">
						<Favorite />
					</Route>
					<Route exact path="/palettes/:id">
						<Palette
							setGetNew={setGetNew}
							sessionUser={sessionUser}
						/>
					</Route>
					<Route exact path="/login">
						<LoginFormPage sessionUser={sessionUser} />
					</Route>
					<Route exact path="/signup">
						<SignupFormPage sessionUser={sessionUser} />
					</Route>
					<Route exact path="/">
						{/* <DefaultHome /> */}
						<TestMason
							images={myImages}
							brakePoints={brakePoints}
						/>
					</Route>
				</Switch>
			</AnimatePresence>
		</>
	);
}

export default App;
