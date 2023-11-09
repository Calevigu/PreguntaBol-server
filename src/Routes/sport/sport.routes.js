const { Router } = require("express");
const getAllSports = require("../../controllers/sport/getAllSports");
const getSportId = require("../../controllers/sport/getSportId");

const router = Router();

router.get("/", getAllSports);
router.get("/:id", getSportId);

module.exports = router;