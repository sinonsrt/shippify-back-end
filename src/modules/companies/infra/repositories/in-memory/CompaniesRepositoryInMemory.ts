import { ICreateCompanyDTO } from "../../../dto";
import { ICompaniesRepository } from "../../../interfaces/ICompaniesRepository";
import { Company } from "../../entities/Company";

class CompaniesRepositoryInMemory implements ICompaniesRepository {
  companies: Company[] = [];

  async list(): Promise<Company[]> {
    return this.companies;
  }

  async create({
    name,
    city,
    status,
    plan_type,
  }: ICreateCompanyDTO): Promise<Company> {
    const company = new Company();

    Object.assign(company, {
      name,
      city,
      status,
      plan_type,
    });

    this.companies.push(company);

    return company;
  }

  async findById(id: number): Promise<Company> {
    const company = this.companies.find((c) => c.id === id);

    return company;
  }
}

export { CompaniesRepositoryInMemory };
