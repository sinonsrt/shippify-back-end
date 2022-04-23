import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteCompanyUseCase } from "./DeleteCompanyUseCase";

class DeleteCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCompanyUseCase = container.resolve(DeleteCompanyUseCase);

    await deleteCompanyUseCase.execute(Number(id));

    return response.send();
  }
}

export { DeleteCompanyController };
