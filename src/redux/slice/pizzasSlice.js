import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	items: [],
	status: "loading",
};

export const fetchPizzas = createAsyncThunk(
	"pizzas/fetchPizzas",
	async (params) => {
		const { sortBy, category, search, page } = params;
		const response = await axios.get("https://62ade5f2645d00a28a01a037.mockapi.io/pizza?" + sortBy + category + `&search=${search}` + page)
		return response.data
	}
);

const pizzasSlice = createSlice({
	name: "pizzas",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchPizzas.pending]: (state) => {
			state.items = [];
			state.status = "loading";
		},
		[fetchPizzas.fulfilled]: (state, action) => {
			state.items = action.payload;
			state.status = "success";
		},
		[fetchPizzas.rejected]: (state) => {
			state.items = [];
			state.status = "error";
		},
	},
});

const { actions, reducer } = pizzasSlice;

export const {  } = actions;

export default reducer;