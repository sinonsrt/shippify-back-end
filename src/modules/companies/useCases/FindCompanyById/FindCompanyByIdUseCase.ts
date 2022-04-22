import { Company } from "modules/companies/infra/entities/Company";
import { ICompaniesRepository } from "modules/companies/interfaces/ICompaniesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class FindCompanyByIdUseCase {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: ICompaniesRepository
  ) {}

  async execute(id: number): Promise<Company> {
    const company = await this.companiesRepository.findById(id);

    return company;
  }
}

export { FindCompanyByIdUseCase };
