import { Router } from "express";
import { CreateVehicleController } from "modules/vehicles/useCases/CreateVehicle/CreateVehicleController";
import { DeleteVehicleController } from "modules/vehicles/useCases/DeleteVehicle/DeleteVehicleController";

const vehiclesRoutes = Router();

const createVehicleController = new CreateVehicleController();
const deleteVehicleController = new DeleteVehicleController();

vehiclesRoutes.post("/", createVehicleController.handle);
vehiclesRoutes.delete("/:id", deleteVehicleController.handle);

export { vehiclesRoutes };
