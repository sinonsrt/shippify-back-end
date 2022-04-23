import { Router } from "express";
import { CreateVehicleController } from "modules/vehicles/useCases/CreateVehicle/CreateVehicleController";

const vehiclesRoutes = Router();

const createVehicleController = new CreateVehicleController();

vehiclesRoutes.post("/", createVehicleController.handle);

export { vehiclesRoutes };
