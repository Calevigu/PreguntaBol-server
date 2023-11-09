const { Geography,Category} = require("../../db.js");

const getAllGeographys = async (req, res) => {
  try {
    const geography = await Geography.findAll({
      include: Category,
    });
    return res.status(200).json(geography);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAllGeographys;