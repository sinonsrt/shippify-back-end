import { ICompaniesRepository } from "modules/companies/interfaces/ICompaniesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteCompanyUseCase {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: ICompaniesRepository
  ) {}

  async execute(id: number): Promise<void> {
    await this.companiesRepository.delete(id);
  }
}

export { DeleteCompanyUseCase };
