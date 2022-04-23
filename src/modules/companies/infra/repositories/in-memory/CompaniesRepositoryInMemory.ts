import { randomInt } from "crypto";

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
      id: randomInt(10),
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

  async delete(id: number): Promise<void> {
    // TODO - Criar fake delete

    const company = this.companies.find((c) => c.id === id);
    const index = this.companies.indexOf(company);
    this.companies.splice(index, 1);
  }
}

export { CompaniesRepositoryInMemory };
