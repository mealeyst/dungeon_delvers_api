"use strict";
const Hapi = require("@hapi/hapi");
require("dotenv").config();

const api = async () => {
  const server = Hapi.server({
    port: 8080,
    host: "localhost"
  });

  await server.start();
  console.log("Server running on port 3000");
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

api();
