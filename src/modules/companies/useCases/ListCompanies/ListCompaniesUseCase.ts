import { Company } from "modules/companies/infra/entities/Company";
import { ICompaniesRepository } from "modules/companies/interfaces/ICompaniesRepository";

class ListCompaniesUseCase {
  constructor(private companiesRepository: ICompaniesRepository) {}

  async execute(): Promise<Company[]> {
    const companies = await this.companiesRepository.list();

    return companies;
  }
}

export { ListCompaniesUseCase };
