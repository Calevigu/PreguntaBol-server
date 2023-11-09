require("dotenv").config();

const server = require("./src/app.js");
const { conn } = require("./src/db.js");

const { PORT } = process.env;
conn
  .sync({ force: false })
  .then(() => {
    server.listen(PORT, async () => {
      // await saveCountriesToDatabase();
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));