import {combineReducers, configureStore} from "@reduxjs/toolkit";
import users from "./slices/users";

const rootReducer = combineReducers({users});
export const setupStore = () => configureStore({
	reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
