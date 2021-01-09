import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import axios from "axios";

//* Global Styles: styled-component
import GlobalStyle from "./styles/GlobalStyle";

//* Components
import LoginFormPage from "./components/LoginForm";
import SignupFormPage from "./components/SignupForm";
import Nav from "./components/Nav";
import Homepage from "./components/Home/Homepage";
import Palette from "./components/Palette/Palette";
import NewPalette from "./components/CreatePalette/NewPalette";

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
			const data = response.data;
			setColorCombos(data);
			setLoaded(true);
		})();
	}, [authenticated, dispatch]);

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
					/>
				</Route>
				<Route exact path="/palettes/:id">
					<Palette />
				</Route>
				<Route path="/login">
					<LoginFormPage sessionUser={sessionUser} />
				</Route>
				<Route path="/signup">
					<SignupFormPage sessionUser={sessionUser} />
				</Route>
				<Route exact path="/">
					<Homepage colorCombos={colorCombos} />
				</Route>
			</Switch>
			{/* </AnimatePresence> */}
		</>
	);
}

export default App;
