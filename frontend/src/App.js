import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import axios from "axios";

//* Global Styles: styled-component
import GlobalStyle from "./styles/GlobalStyle";

//* Components
import LoginFormPage from "./components/UserAuth/LoginForm";
import SignupFormPage from "./components/UserAuth/SignupForm";
import Nav from "./components/Nav/Nav";
import Homepage from "./components/Home/Homepage";
import Palette from "./components/Palette/Palette";
import NewPalette from "./components/CreatePalette/NewPalette";
import User from "./components/Profile/User";

//* Redux
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "./store/session";

//* Page Transitions
// import { AnimatePresence } from "framer-motion";

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

	return (
		<>
			<GlobalStyle />
			<Nav sessionUser={sessionUser} />
			{/* <AnimatePresence exitBeforeEnter> */}
			<Switch location={location} key={location.pathname}>
				<Route exact path="/palettes/create">
					<NewPalette
						sessionUser={sessionUser}
						colorCombos={colorCombos}
						setGetNew={setGetNew}
					/>
				</Route>
				<Route path="/users/:userId">
					<User sessionUser={sessionUser} setGetNew={setGetNew} />
				</Route>
				<Route exact path="/palettes/:id">
					<Palette setGetNew={setGetNew} />
				</Route>
				<Route path="/login">
					<LoginFormPage sessionUser={sessionUser} />
				</Route>
				<Route path="/signup">
					<SignupFormPage sessionUser={sessionUser} />
				</Route>
				<Route exact path="/">
					<Homepage
						colorCombos={colorCombos}
						popularCombos={popularCombos}
						setGetNew={setGetNew}
					/>
				</Route>
			</Switch>
			{/* </AnimatePresence> */}
		</>
	);
}

export default App;
