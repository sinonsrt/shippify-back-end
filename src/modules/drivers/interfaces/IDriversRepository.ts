import { ICreateDriverDTO } from "../dto";

interface IDriversRepository {
  create(data: ICreateDriverDTO): Promise<void>;
}

export { IDriversRepository };
