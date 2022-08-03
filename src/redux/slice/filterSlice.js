import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	categoryId: 0,
	currentPage: 1,
	searchValue: "",
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
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload;
		},
		setFilters(state, action) {
			state.categoryId = Number(action.payload.categoryId)
			state.currentPage = Number(action.payload.currentPage);
			state.sort = action.payload.sort;
		}
	},
});

const { actions, reducer } = filterSlice;

export const filterSelector = (state) => state.filter;

export const { setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue } = actions;

export default reducer;