var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/articles/add", function (req, res, next) {
	res.render("index", {
		title: "Articles",
	});
});

module.exports = router;