import { Router } from "express";
import { CreateDriverController } from "modules/drivers/useCases/CreateDriver/CreateDriverController";
import { ListDriversController } from "modules/drivers/useCases/ListDrivers/ListDriversController";

const driversRoutes = Router();

const createDriverController = new CreateDriverController();
const listDriversController = new ListDriversController();

driversRoutes.post("/", createDriverController.handle);
driversRoutes.get("/", listDriversController.handle);

export { driversRoutes };
