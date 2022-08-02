import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	categoryId: 0,
	sort: {
		name: "популярности",
		property: "rating",
	},
};

const filterSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload;
		},
		setSort(state, action) {
			state.sort = action.payload;
		}
	},
});

const { actions, reducer } = filterSlice;

export const { setCategoryId, setSort } = actions;

export default reducer;