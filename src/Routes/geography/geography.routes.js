const { Router } = require("express");
const getAllGeography = require("../../controllers/geography/getAllGeographys.js");
const getGeographyId = require("../../controllers/geography/getGeographyId.js");

const router = Router();

router.get("/", getAllGeography);
router.get("/:id", getGeographyId);

module.exports = router;
