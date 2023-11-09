const { Geography,Category} = require("../../db.js");

  const getGeographyId = async (req, res) => {
    const {id} = req.params;
    try {
      const geography = await Geography.findByPk(id, {
        include: Category, // Incluye la categoría asociada a la pregunta
      });
      if (geography) {
        res.status(200).json(geography);
      } else {
        res.status(404).json({ error: 'geography no encontrada' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'No se pudo obtener la geography' });
    }
  };
module.exports = getGeographyId;