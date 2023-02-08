import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "./store/store";
import {fetchUsers} from "./store/slices/users";
import {UsersContainer} from "./pages/users/users.container";

function App() {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	return (
		<UsersContainer/>
	);
}

export default App;
