import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateVehicleUseCase } from "./UpdateVehicleUseCase";

class UpdateVehicleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { driver_id, plate, model, type, capacity } = request.body;

    const updateVehicleUseCase = container.resolve(UpdateVehicleUseCase);

    const vehicle = await updateVehicleUseCase.execute({
      id: Number(id),
      driver_id,
      plate,
      model,
      type,
      capacity,
    });

    return response.status(200).json(vehicle);
  }
}

export { UpdateVehicleController };
