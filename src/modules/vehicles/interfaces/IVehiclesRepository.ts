import { ICreateVehicleDTO } from "../dto";

interface IVehiclesRepository {
  create(data: ICreateVehicleDTO): Promise<void>;
}

export { IVehiclesRepository };
