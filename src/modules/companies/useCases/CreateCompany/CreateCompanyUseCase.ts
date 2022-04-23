import { inject, injectable } from "tsyringe";

import { ICompanyDTO } from "../../dto";
import { Company } from "../../infra/entities/Company";
import { ICompaniesRepository } from "../../interfaces/ICompaniesRepository";

@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: ICompaniesRepository
  ) {}

  async execute({
    name,
    city,
    status,
    plan_type,
  }: ICompanyDTO): Promise<Company> {
    const company = await this.companiesRepository.create({
      name,
      city,
      status,
      plan_type,
    });

    return company;
  }
}

export { CreateCompanyUseCase };
