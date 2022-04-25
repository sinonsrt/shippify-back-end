import { Vehicle } from "modules/vehicles/infra/entities/Vehicle";
import { IVehiclesRepository } from "modules/vehicles/interfaces/IVehiclesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class FindVehicleByIdUseCase {
  constructor(
    @inject("VehiclesRepository")
    private vehiclesRepository: IVehiclesRepository
  ) {}

  async execute(id: number): Promise<Vehicle> {
    const vehicle = await this.vehiclesRepository.findById(id);

    return vehicle;
  }
}

export { FindVehicleByIdUseCase };
