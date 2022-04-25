import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindVehicleByIdUseCase } from "./FindVehicleByIdUseCase";

class FindVehicleByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findVehicleByIdUseCase = container.resolve(FindVehicleByIdUseCase);

    const vehicle = await findVehicleByIdUseCase.execute(Number(id));

    const treatVehicle = {
      ...vehicle,
      driver: vehicle.driver.id,
    };

    return response.json(treatVehicle);
  }
}

export { FindVehicleByIdController };
