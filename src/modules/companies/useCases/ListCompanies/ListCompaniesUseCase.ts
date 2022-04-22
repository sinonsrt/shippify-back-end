import { Company } from "modules/companies/infra/entities/Company";
import { ICompaniesRepository } from "modules/companies/interfaces/ICompaniesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListCompaniesUseCase {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: ICompaniesRepository
  ) {}

  async execute(): Promise<Company[]> {
    const companies = await this.companiesRepository.list();

    return companies;
  }
}

export { ListCompaniesUseCase };
