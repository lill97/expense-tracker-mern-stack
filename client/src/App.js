import "./App.css";
import { Header } from "./components/Header";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { Balance } from "./components/Balance";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getTransaction } from "./store/TransactionReducer";
import { useEffect } from "react";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:5000/api/items");
				dispatch(getTransaction(response.data));
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [dispatch]);

	return (
		<div className="App">
			<Header />
			<div className="container">
				<Balance />
				<IncomeExpenses />
				<TransactionList />
				<AddTransaction />
			</div>
		</div>
	);
}

export default App;
