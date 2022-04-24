import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListDriversUseCase } from "./ListDriversUseCase";

class ListDriversController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listDriversUseCase = container.resolve(ListDriversUseCase);

    const drivers = await listDriversUseCase.execute();

    const treatDrivers = drivers.map((driver) => ({
      ...driver,
      company: driver.company.name,
    }));

    return response.status(200).json(treatDrivers);
  }
}

export { ListDriversController };
