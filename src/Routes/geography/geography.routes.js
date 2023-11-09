const { Router } = require("express");
const getAllGeographys = require("../../controllers/geography/getAllGeographys");
const getGeographyId = require("../../controllers/geography/getGeographyId");

const router = Router();

router.get("/", getAllGeographys);
router.get("/:id", getGeographyId);

module.exports = router;