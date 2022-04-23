import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateVehicleUseCase } from "./CreateVehicleUseCase";

class CreateVehicleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { driver_id, plate, model, type, capacity } = request.body;

    const createVehicleUseCase = container.resolve(CreateVehicleUseCase);

    const vehicle = await createVehicleUseCase.execute({
      driver_id,
      plate,
      model,
      type,
      capacity,
    });

    return response.status(201).json(vehicle);
  }
}

export { CreateVehicleController };
