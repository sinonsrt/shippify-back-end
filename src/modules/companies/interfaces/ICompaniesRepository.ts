import { ICompanyDTO } from "../dto";
import { Company } from "../infra/entities/Company";

interface ICompaniesRepository {
  create(data: ICompanyDTO): Promise<Company>;
  list(): Promise<Company[]>;
  findById(id: number): Promise<Company>;
  update(data: ICompanyDTO): Promise<Company>;
  delete(id: number): Promise<void>;
}

export { ICompaniesRepository };
