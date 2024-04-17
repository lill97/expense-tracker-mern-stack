import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction } from "../store/TransactionReducer";
import axios from "axios";

//Money formatter function
function moneyFormatter(num) {
	let p = num.toFixed(2).split(".");
	return (
		"$ " +
		p[0]
			.split("")
			.reverse()
			.reduce(function (acc, num, i, orig) {
				return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
			}, "") +
		"." +
		p[1]
	);
}

export const TransactionList = () => {
	const transactions = useSelector((state) => state.transactions);

	const dispatch = useDispatch();

	const handleDelete = (id) => {
		axios
			.delete(`http://localhost:5000/api/items/${id}`)
			.then((res) => {
				dispatch(deleteTransaction(id));
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<h3>History</h3>
			<ul className="list">
				{transactions.map((transaction, index) => (
					<li key={index} className={transaction.amount < 0 ? "minus" : "plus"}>
						{transaction.text}{" "}
						<span>
							{transaction.amount < 0 ? "-" : "+"}
							{moneyFormatter(Number(transaction.amount))}
						</span>{" "}
						<button
							className="delete-btn"
							onClick={() => handleDelete(transaction.id)}
						>
							x
						</button>
					</li>
				))}
			</ul>
		</>
	);
};
