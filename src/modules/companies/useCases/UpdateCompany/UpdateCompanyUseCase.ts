import { ICompanyDTO } from "modules/companies/dto";
import { Company } from "modules/companies/infra/entities/Company";
import { ICompaniesRepository } from "modules/companies/interfaces/ICompaniesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateCompanyUseCase {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: ICompaniesRepository
  ) {}

  async execute({
    id,
    name,
    city,
    status,
    plan_type,
  }: ICompanyDTO): Promise<Company> {
    const company = await this.companiesRepository.update({
      id,
      name,
      city,
      status,
      plan_type,
    });

    return company;
  }
}

export { UpdateCompanyUseCase };
