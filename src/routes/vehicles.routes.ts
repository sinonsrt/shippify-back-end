import { Router } from "express";
import { CreateVehicleController } from "modules/vehicles/useCases/CreateVehicle/CreateVehicleController";
import { DeleteVehicleController } from "modules/vehicles/useCases/DeleteVehicle/DeleteVehicleController";
import { ListVehicleController } from "modules/vehicles/useCases/ListVehicle/ListVehicleController";

const vehiclesRoutes = Router();

const createVehicleController = new CreateVehicleController();
const deleteVehicleController = new DeleteVehicleController();
const listVehicleController = new ListVehicleController();

vehiclesRoutes.post("/", createVehicleController.handle);
vehiclesRoutes.get("/", listVehicleController.handle);
vehiclesRoutes.delete("/:id", deleteVehicleController.handle);

export { vehiclesRoutes };
