import { ICreateCompanyDTO } from "../dto";
import { Company } from "../infra/entities/Company";

interface ICompaniesRepository {
  create(data: ICreateCompanyDTO): Promise<Company>;
  list(): Promise<Company[]>;
}

export { ICompaniesRepository };
