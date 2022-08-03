import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	totalPrice: 0,
	items: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem(state, action) {
			const item = state.items.find(item => item.id === action.payload.id);

			if (item) {
				item.count++;
			} else {
				state.items.push({
					...action.payload,
					count: 1,
				});
			}

			state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0);
		},
		minusItem(state, action) {
			const item = state.items.find(item => item.id === action.payload);

			if (item) {
				item.count--;
			}

			state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0);
		},
		removeItem(state, action) {
			state.items = state.items.filter((item) => item.id !== action.payload);
			state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0);
		},
		clearItems(state) {
			state.items = [];
			state.totalPrice = 0;
		},
	},
});

const { actions, reducer } = cartSlice;

export const { addItem, minusItem, removeItem, clearItems } = actions;

export default reducer;