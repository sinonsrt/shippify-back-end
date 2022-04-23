import { Vehicle } from "modules/vehicles/infra/entities/Vehicle";
import { IVehiclesRepository } from "modules/vehicles/interfaces/IVehiclesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListVehicleUseCase {
  constructor(
    @inject("VehiclesRepository")
    private vehiclesRepository: IVehiclesRepository
  ) {}

  async execute(driver_id?: number): Promise<Vehicle[]> {
    const drivers = await this.vehiclesRepository.list(driver_id);

    return drivers;
  }
}

export { ListVehicleUseCase };
