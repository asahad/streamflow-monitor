import { fetchUSGSData, trialEndpoint } from "./fetchDataController";
const express = require("express");
const router = express.Router();
router.route("/fetchugsdata").post(fetchUSGSData);
router.route("/trial").get(trialEndpoint);
module.exports = router;
