import { ICreateCompanyDTO } from "../dto";
import { ICompaniesRepository } from "../interfaces/ICompaniesRepository";

class CreateCompanyUseCase {
  constructor(private companiesRepository: ICompaniesRepository) {}

  async execute({
    name,
    city,
    status,
    plan_type,
  }: ICreateCompanyDTO): Promise<void> {
    await this.companiesRepository.create({
      name,
      city,
      status,
      plan_type,
    });
  }
}

export { CreateCompanyUseCase };
