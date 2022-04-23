import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCompanyUseCase } from "./UpdateCompanyUseCase";

class UpdateCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, city, status, plan_type } = request.body;

    const updateCompanyUseCase = container.resolve(UpdateCompanyUseCase);

    const company = await updateCompanyUseCase.execute({
      id: Number(id),
      name,
      city,
      status,
      plan_type,
    });

    return response.json(company);
  }
}

export { UpdateCompanyController };
