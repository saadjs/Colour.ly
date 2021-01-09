import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import axios from "axios";

//* Global Styles: styled-component
import GlobalStyle from "./components/styles/GlobalStyle";

//* Components
import LoginFormPage from "./components/LoginForm";
import SignupFormPage from "./components/SignupForm";
import Nav from "./components/Nav";
import Home from "./components/Home";

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
	const [allColorDesigns, setAllColorDesigns] = useState([]);

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
			setAllColorDesigns(data);
			console.log(data);
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
				<Route path="/login">
					<LoginFormPage sessionUser={sessionUser} />
				</Route>
				<Route path="/signup">
					<SignupFormPage sessionUser={sessionUser} />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
			{/* </AnimatePresence> */}
		</>
	);
}

export default App;
