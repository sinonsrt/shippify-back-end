import { ICreateCompanyDTO } from "../dto";

interface ICompaniesRepository {
  create(data: ICreateCompanyDTO): Promise<void>;
}

export { ICompaniesRepository };
