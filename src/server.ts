import express from "express";

import "reflect-metadata";
import { AppDataSource } from "./data-source";

AppDataSource.initialize();

const app = express();

app.listen(3333, () => console.log("Server already up 🚀"));
