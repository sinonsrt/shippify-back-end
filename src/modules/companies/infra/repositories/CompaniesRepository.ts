import { ICompanyDTO } from "modules/companies/dto";
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

  async findById(id: number): Promise<Company> {
    const company = await this.repository.findOne(id);

    return company;
  }

  async create({
    name,
    city,
    status,
    plan_type,
  }: ICompanyDTO): Promise<Company> {
    const company = this.repository.create({
      name,
      city,
      status,
      plan_type,
    });

    await this.repository.save(company);

    return company;
  }

  async update({
    id,
    name,
    city,
    status,
    plan_type,
  }: ICompanyDTO): Promise<Company> {
    const company = await this.repository.save({
      id,
      name,
      city,
      status,
      plan_type,
    });

    return company;
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

export { CompaniesRepository };
