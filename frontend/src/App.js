import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

// Global Styles: styled-component
import GlobalStyle from "./components/styles/GlobalStyle";

// Components
import LoginFormPage from "./components/LoginForm";
import SignupFormPage from "./components/SignupForm";
import Nav from "./components/Nav";

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
			<GlobalStyle />
			<Nav sessionUser={sessionUser} />
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
