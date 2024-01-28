const { fetchUSGSData, trialEndpoint } = require("./fetchDataController");
const express = require("express");
const router = express.Router();
router.route("/fetchusgsdata").post(fetchUSGSData);
router.route("/trial").get(trialEndpoint);

module.exports = router;
