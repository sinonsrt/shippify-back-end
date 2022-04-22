import { ICreateCompanyDTO } from "../dto";

interface IDriversRepository {
  create(data: ICreateCompanyDTO): Promise<void>;
}

export { IDriversRepository };
