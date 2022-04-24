import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListVehicleUseCase } from "./ListVehicleUseCase";

class ListVehicleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { driver_id } = request.query;

    const listVehicleUseCase = container.resolve(ListVehicleUseCase);
    const vehicles = await listVehicleUseCase.execute(Number(driver_id));

    const treatVehicles = vehicles.map((vehicle) => ({
      ...vehicle,
      driver: `${vehicle.driver.first_name} ${vehicle.driver.last_name}`,
    }));

    return response.json(treatVehicles);
  }
}

export { ListVehicleController };
