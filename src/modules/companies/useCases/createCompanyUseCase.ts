import { ICreateCompanyDTO } from "../dto";
import { Company } from "../infra/entities/Company";
import { ICompaniesRepository } from "../interfaces/ICompaniesRepository";

class CreateCompanyUseCase {
  constructor(private companiesRepository: ICompaniesRepository) {}

  async execute({
    name,
    city,
    status,
    plan_type,
  }: ICreateCompanyDTO): Promise<Company> {
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
