import { ICreateCompanyDTO } from "../dto";
import { Company } from "../infra/entities/Company";

interface ICompaniesRepository {
  create(data: ICreateCompanyDTO): Promise<Company>;
  list(): Promise<Company[]>;
  findById(id: number): Promise<Company>;
}

export { ICompaniesRepository };
