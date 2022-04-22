import "reflect-metadata";

import express from "express";
import { router } from "routes";

import createConnection from "./database";
import "./shared/container";

const app = express();

createConnection();

app.use(express.json());
app.use(router);

app.get("/", (request, response) =>
  response.json("Shippify API 🚀 - Server is up")
);
app.listen(3333, () => console.log("Server already up 🚀"));
