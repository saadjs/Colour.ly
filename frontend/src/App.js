import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginForm";
import SignupFormPage from "./components/SignupForm";
import Navigation from "./components/Navigation";

// Redux
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "./store/session";

function App() {
	const dispatch = useDispatch();
	const [authenticated, setAuthenticated] = useState(false);
	const [loaded, setLoaded] = useState(false);

	const sessionUser = useSelector((state) => state.session.user);

	useEffect(() => {
		dispatch(sessionActions.restoreUser()).catch((res) => {
			if (!res.errors) setAuthenticated(true);
		});
		setLoaded(true);
	}, [authenticated, dispatch]);

	if (!loaded) {
		return null;
	}

	return (
		<>
			<Navigation />
			<Switch>
				<Route path="/login">
					<LoginFormPage />
				</Route>
				<Route path="/signup">
					<SignupFormPage />
				</Route>
			</Switch>
		</>
	);
}

export default App;
