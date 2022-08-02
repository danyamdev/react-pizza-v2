import { configureStore } from "@reduxjs/toolkit";

import filter from "./slice/filterSlice"

const store = configureStore({
	reducer: {
		filter,
	}
});

export default store;