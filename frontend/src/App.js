import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginForm";
import Navigation from "./components/Navigation";
import SignupFormPage from "./components/SignupForm";
import * as sessionActions from "./store/session";

function App() {
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
