const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const items = require("./routes/api/Items");

const app = express();

app.use(express.json());

// Middleware for handling CORS Policy
app.use(cors());

// Connect to Mongo
mongoose
	.connect("mongodb://127.0.0.1:27017/mern_shopping")
	.then(() => {
		console.log("MongoDB Connected!");
	})
	.catch((err) => console.log(err));

// Use Routes
app.use("/api/items", items);

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
