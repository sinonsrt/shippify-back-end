import { Router } from "express";

import { companiesRoutes } from "./companies.routes";

const router = Router();

router.use("/companies", companiesRoutes);

export { router };
