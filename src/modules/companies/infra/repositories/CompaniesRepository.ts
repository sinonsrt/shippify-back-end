import { ICreateCompanyDTO } from "modules/companies/dto";
import { ICompaniesRepository } from "modules/companies/interfaces/ICompaniesRepository";
import { getRepository, Repository } from "typeorm";

import { Company } from "../entities/Company";

class CompaniesRepository implements ICompaniesRepository {
  private repository: Repository<Company>;

  constructor() {
    this.repository = getRepository(Company);
  }

  list(): Promise<Company[]> {
    throw new Error("Method not implemented.");
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
