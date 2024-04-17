import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "transactions",
	initialState: [],
	reducers: {
		getTransaction: (state, action) => {
			return action.payload.map((user) => {
				return { id: user._id, text: user.text, amount: user.amount };
			});
		},
		addTransaction: (state, action) => {
			state.push(action.payload);
		},
		deleteTransaction: (state, action) => {
			const id = action.payload;
			const delete_transaction = state.find(
				(transaction) => transaction.id === id
			);
			if (delete_transaction) {
				return state.filter((transaction) => transaction.id !== id);
			}
		},
	},
});

export const { getTransaction, addTransaction, deleteTransaction } =
	userSlice.actions;

export default userSlice.reducer;
