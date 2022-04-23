import { IDriverDTO } from "../dto";
import { Driver } from "../infra/entities/Driver";

interface IDriversRepository {
  create(data: IDriverDTO): Promise<Driver>;
  list(): Promise<Driver[]>;
}

export { IDriversRepository };
