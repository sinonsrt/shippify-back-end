import { ICreateCompanyDTO } from "modules/companies/dto";
import { ICompaniesRepository } from "modules/companies/interfaces/ICompaniesRepository";
import { getRepository, Repository } from "typeorm";

import { Company } from "../entities/Company";

class CompaniesRepository implements ICompaniesRepository {
  private repository: Repository<Company>;

  constructor() {
    this.repository = getRepository(Company);
  }

  async list(): Promise<Company[]> {
    const companies = await this.repository.find();

    return companies;
  }

  async create({
    name,
    city,
    status,
    plan_type,
  }: ICreateCompanyDTO): Promise<Company> {
    const company = this.repository.create({
      name,
      city,
      status,
      plan_type,
    });

    await this.repository.save(company);

    return company;
  }
}

export { CompaniesRepository };
