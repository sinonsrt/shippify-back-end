import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindCompanyByIdUseCase } from "./FindCompanyByIdUseCase";

class FindCompanyByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findCompanyByIdUseCase = container.resolve(FindCompanyByIdUseCase);

    const company = await findCompanyByIdUseCase.execute(Number(id));

    return response.json(company);
  }
}

export { FindCompanyByIdController };
