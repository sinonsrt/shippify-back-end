import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListDriversUseCase } from "./ListDriversUseCase";

class ListDriversController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listDriversUseCase = container.resolve(ListDriversUseCase);

    const driver = await listDriversUseCase.execute();

    return response.status(200).json(driver);
  }
}

export { ListDriversController };
