import React from "react";
import { useSelector } from "react-redux";

//Money formatter function
function moneyFormatter(num) {
	let p = num.toFixed(2).split(".");
	return (
		"$ " +
		(p[0].split("")[0] === "-" ? "-" : "") +
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

export const Balance = () => {
	const transactions = useSelector((state) => state.transactions);

	const amounts = transactions.map((transaction) => Number(transaction.amount));

	const total = amounts.reduce((acc, item) => (acc += item), 0);

	return (
		<>
			<h4>Your Balance</h4>
			<h1>{moneyFormatter(total)}</h1>
		</>
	);
};
