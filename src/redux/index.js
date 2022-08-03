import { configureStore } from "@reduxjs/toolkit";

import filter from "./slice/filterSlice";
import cart from "./slice/cartSlice";
import pizzas from "./slice/pizzasSlice";

const store = configureStore({
	reducer: {
		filter,
		cart,
		pizzas,
	}
});

export default store;