const express = require("express");
const sportRoutes = require("./routes/sport/sport.routes.js");
const geographyRoutes = require("./routes/geography/geography.routes.js");

const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use("/sport", sportRoutes);
server.use("/geography", geographyRoutes);

module.exports = server;
