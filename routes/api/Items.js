const express = require("express");
const Item = require("../../models/Item");

const router = express.Router();

// @route GET api/items
// @desc Get All Items
router.get("/", (req, res) => {
	Item.find()
		.then((items) => res.json(items))
		.catch((err) => console.log(err));
});

// @route POST api/items
// @desc Create An Item
router.post("/", (req, res) => {
	const newItem = new Item({
		text: req.body.text,
		amount: req.body.amount,
	});

	newItem.save().then((item) => res.json(item));
});

// @route DELETE api/items/:id
// @desc Delete An Item
router.delete("/:id", (req, res) => {
	Item.findById(req.params.id)
		.then((item) => item.deleteOne().then(() => res.json({ success: true })))
		.catch((err) => res.json({ success: false }));
});

module.exports = router;
