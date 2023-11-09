const { Sport,Category} = require("../../db.js");

const getAllSports = async (req, res) => {
  try {
    const sports = await Sport.findAll({
      include: Category,
    });
    return res.status(200).json(sports);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAllSports;