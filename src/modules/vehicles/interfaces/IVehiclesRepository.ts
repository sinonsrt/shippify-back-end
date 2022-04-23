import { IVehicleDTO } from "../dto";
import { Vehicle } from "../infra/entities/Vehicle";

interface IVehiclesRepository {
  create(data: IVehicleDTO): Promise<Vehicle>;
  list(driver_id: number): Promise<Vehicle[]>;
  update(data: IVehicleDTO): Promise<Vehicle>;
  delete(id: number): Promise<void>;
}

export { IVehiclesRepository };
