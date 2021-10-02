import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";

export const register = createAsyncThunk("user/register", async (payload) => {
	//call api
	const data = await userApi.register(payload);
	console.log(data);
	//save to local storage
	localStorage.setItem("access_token", data.jwt);

	return data;
});

export const signUp = createAsyncThunk("user/login", async (payload) => {
	//call api
	const data = await userApi.login(payload);

	localStorage.setItem("access_token", data.jwt);

	return data;
});

const authSlice = createSlice({
	name: "user",
	initialState: {
		current: { jwt: localStorage.getItem("access_token") || {}, user: {} },
		settings: {},
	},
	reducers: {
		logout(state, action) {
			localStorage.removeItem("access_token");
			state.current = {};
		},
		getUserInfo(state, action) {
			state.current = {
				jwt: localStorage.getItem("access_token") || {},
				user: action.payload,
			};
		},
	},
	extraReducers: {
		[register.fulfilled]: (state, action) => {
			console.log(state, action);
			state.current = action.payload;
		},
		[signUp.fulfilled]: (state, action) => {
			console.log(state, action);
			state.current = action.payload;
		},
	},
});

const { actions, reducer } = authSlice;
export const { logout, getUserInfo } = actions;
export default reducer;
