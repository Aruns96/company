const express = require("express");
const reviewControllers = require("../controllers/review")

const router = express.Router();

router.post("/add-review",reviewControllers.postRatingData);

router.post("/get-review",reviewControllers.getRatingData);

router.delete("/edit-data/:id",reviewControllers.editPlayerData)





module.exports = router;