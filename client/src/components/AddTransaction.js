import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../store/TransactionReducer";
import axios from "axios";

export const AddTransaction = () => {
	const [text, setText] = useState("");
	const [amount, setAmount] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();

		axios
			.post("http://localhost:5000/api/items/", { text, amount })
			.then((res) => {
				dispatch(addTransaction(res.data));
			})
			.catch((err) => console.log(err));

		setText("");
		setAmount("");
	};

	return (
		<>
			<h3>Add new transaction</h3>
			<form onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input
						type="text"
						placeholder="Enter text..."
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Amount <br />
						(negative - expense, positive - income)
					</label>
					<input
						type="number"
						placeholder="Enter amount..."
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
				</div>
				<button className="btn">Add transaction</button>
			</form>
		</>
	);
};
