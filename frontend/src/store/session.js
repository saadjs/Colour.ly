const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

// Action Creators

// Set user action creator
const setUser = (user) => {
	return {
		type: SET_USER,
		payload: user,
	};
};

// Remove user action creator
const removeUser = () => {
	return {
		type: REMOVE_USER,
	};
};

// User login
export const login = (user) => async (dispatch) => {
	const { email, password } = user;
	const response = await fetch("/api/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email,
			password,
		}),
	});
	const userData = await response.json();
	if (!userData.errors) {
		dispatch(setUser(userData));
		return userData;
	} else {
		throw userData;
	}
};

// User signup
export const signup = (user) => async (dispatch) => {
	const { username, email, password } = user;
	const response = await fetch("/api/auth/signup", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username,
			email,
			password,
		}),
	});
	const newUser = await response.json();
	if (!newUser.errors) {
		dispatch(setUser(newUser));
		return newUser;
	} else {
		throw newUser;
	}
};

// Restore user
export const restoreUser = () => async (dispatch) => {
	const response = await fetch("/api/auth/", {
		headers: {
			"Content-Type": "application/json",
		},
	});
	const userData = await response.json();
	if (!userData.errors) {
		dispatch(setUser(userData));
		return userData;
	} else {
		throw userData;
	}
};

// User logout
export const logout = () => async (dispatch) => {
	const response = await fetch("/api/auth/logout", {
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await response.json();
	dispatch(removeUser());
	return data;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
	let newState;
	switch (action.type) {
		case SET_USER:
			newState = Object.assign({}, state);
			newState.user = action.payload;
			return newState;
		case REMOVE_USER:
			newState = Object.assign({}, state);
			newState.user = null;
			return newState;
		default:
			return state;
	}
};

export default sessionReducer;
