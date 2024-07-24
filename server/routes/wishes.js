const express = require("express");
const router = express.Router();

const { index, addWishes } = require("../controllers/wishes");

router.route("/wishes").get(index).post(addWishes);

module.exports = router;
