import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../types";

const initialState:{users: Array<User>} = {users: []};

export const fetchUsers = createAsyncThunk(
	"users/fetchUsers",
	async () => {
		const response = await fetch("https://jsonplaceholder.typicode.com/users");
		return await response.json();
	}
);

const usersSlice = createSlice({
	name: "taskSlice",
	initialState,
	reducers: {
		deleteUser(state, action: PayloadAction<number>) {
			state.users = state.users.filter((user) => user.id !== action.payload);
		},
		updateUser(state, action: PayloadAction<User>) {
			const cIndex = state.users.findIndex(user => user.id === action.payload.id);

			if (cIndex !== -1) {
				state.users[cIndex] = action.payload;
			}
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.users = action.payload.map((user: User) => ({
				id: user.id,
				name: user.name,
				email: user.email,
				phone: user.phone
			}));
		});
	},
});

export default usersSlice.reducer;
export const {deleteUser, updateUser} = usersSlice.actions;
