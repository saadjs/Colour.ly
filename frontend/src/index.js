import React from "react";
import ReactDOM from "react-dom";

// React router
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

// Redux
import { Provider } from "react-redux";
import configureStore from "./store";
import * as sessionActions from "./store/session";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
	window.store = store;
	window.sessionActions = sessionActions;
}

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
