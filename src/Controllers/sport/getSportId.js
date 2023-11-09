const { Sport,Category} = require("../../db.js");

  const getSportId = async (req, res) => {
    const {id} = req.params;
    try {
      const sport = await Sport.findByPk(id, {
        include: Category, // Incluye la categoría asociada a la pregunta
      });
      if (sport) {
        res.status(200).json(sport);
      } else {
        res.status(404).json({ error: 'sport no encontrada' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'No se pudo obtener la sport' });
    }
  };
module.exports = getSportId;