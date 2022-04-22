import { ICreateCompanyDTO } from "../../../dto";
import { ICompaniesRepository } from "../../../interfaces/ICompaniesRepository";
import { Company } from "../../entities/Company";

class CompaniesRepositoryInMemory implements ICompaniesRepository {
  companies: Company[] = [];

  async create(data: ICreateCompanyDTO): Promise<void> {
    console.log({ data });
  }
}

export { CompaniesRepositoryInMemory };
