import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateDriverUseCase } from "./CreateDriverUseCase";

class CreateDriverController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      company_id,
      city,
      first_name,
      last_name,
      email,
      phone,
      avatar_url,
      status,
    } = request.body;

    const createDriverUseCase = container.resolve(CreateDriverUseCase);

    const driver = await createDriverUseCase.execute({
      company_id,
      city,
      first_name,
      last_name,
      email,
      phone,
      avatar_url,
      status,
    });

    return response.status(201).json(driver);
  }
}

export { CreateDriverController };
