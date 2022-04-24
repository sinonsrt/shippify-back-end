import "reflect-metadata";
import "./shared/container";
import "express-async-errors";

import cors from "cors";
import express from "express";
import { asyncErrors } from "middlewares/asyncErrors";
import { router } from "routes";

import createConnection from "./database";

const app = express();

createConnection();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(asyncErrors);

app.get("/", (request, response) =>
  response.json("Shippify API 🚀 - Server is up")
);
app.listen(3333, () => console.log("Server already up 🚀"));
