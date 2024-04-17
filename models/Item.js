const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
	text: String,
	amount: Number,
});

module.exports = Item = mongoose.model("item", ItemSchema);
