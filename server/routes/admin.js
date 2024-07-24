const express = require("express");
const router = express.Router();

const { index, deleteWishes } = require("../controllers/admin");

router.route("/wishes").get(index);

router.delete("/wishes/:id", deleteWishes);

module.exports = router;
