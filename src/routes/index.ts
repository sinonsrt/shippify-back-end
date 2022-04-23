import { Router } from "express";

import { companiesRoutes } from "./companies.routes";
import { driversRoutes } from "./drivers.routes";
import { vehiclesRoutes } from "./vehicles.routes";

const router = Router();

router.use("/companies", companiesRoutes);
router.use("/vehicles", vehiclesRoutes);
router.use("/drivers", driversRoutes);

export { router };
