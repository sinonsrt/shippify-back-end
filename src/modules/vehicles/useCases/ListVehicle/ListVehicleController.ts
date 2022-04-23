import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListVehicleUseCase } from "./ListVehicleUseCase";

class ListVehicleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { driver_id } = request.params;
    const listVehicleUseCase = container.resolve(ListVehicleUseCase);

    const vehicles = await listVehicleUseCase.execute(Number(driver_id));

    return response.json(vehicles);
  }
}

export { ListVehicleController };
