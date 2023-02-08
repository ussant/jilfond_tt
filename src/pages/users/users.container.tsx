import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../types";
import {UsersComponent} from "./users.component";
import {AppDispatch, RootState} from "../../store/store";
import {deleteUser, updateUser} from "../../store/slices/users";

export const UsersContainer = (): JSX.Element => {
	const dispatch = useDispatch<AppDispatch>();
	const users = useSelector<RootState>(state => state.users.users) as Array<User>;

	const deleteUserHandler = (id: number): PayloadAction<number> => dispatch(deleteUser(id));

	const updateUserHandler = (user: User): PayloadAction<User> => dispatch(updateUser(user));

	return (
		<UsersComponent
			users={users ?? []}
			updateUser={updateUserHandler}
			deleteUser={deleteUserHandler}
		/>
	);
};
