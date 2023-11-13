require("dotenv").config();
const server = require("./src/app.js");
const { conn,Geography,Sport } = require("./src/db.js");
const axios=require("axios");

const { PORT,API_URL } = process.env;
const saveGeographiesToDatabase = async () => {
  try {
    const response = await axios.get(API_URL);
    const geographyData = response.data.geography;
    const geographyToSave = geographyData.map((s) => ({
      id:s.id,
      pregunta: s.pregunta,
      respuestas: s.respuestas,
      respuesta_correcta: s.respuesta_correcta,
    }));
    await Geography.bulkCreate(geographyToSave);
    console.log("geography saved to database");
  } catch (error) {
    console.log("Error to save geography", error);
  }
};
const saveSportsToDatabase = async () => {
  try {
    const response = await axios.get(API_URL);
    const sportData = response.data.deportes;
    const sportToSave = sportData.map((s) => ({
      id:s.id,
      pregunta: s.pregunta,
      respuestas: s.respuestas,
      respuesta_correcta: s.respuesta_correcta,
    }));
    await Sport.bulkCreate(sportToSave);
    console.log("sport saved to database");
  } catch (error) {
    console.log("Error to save sport", error);
  }
};
conn
  .sync({ force: true})
  .then(() => {
    server.listen(PORT, async () => {
      await saveGeographiesToDatabase();
      await saveSportsToDatabase();
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));


