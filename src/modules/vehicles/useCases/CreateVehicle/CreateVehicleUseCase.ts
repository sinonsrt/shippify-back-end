import { IVehicleDTO } from "modules/vehicles/dto";
import { Vehicle } from "modules/vehicles/infra/entities/Vehicle";
import { IVehiclesRepository } from "modules/vehicles/interfaces/IVehiclesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateVehicleUseCase {
  constructor(
    @inject("VehiclesRepository")
    private vehiclesRepository: IVehiclesRepository
  ) {}

  async execute({
    driver_id,
    plate,
    model,
    type,
    capacity,
  }: IVehicleDTO): Promise<Vehicle> {
    const vehicle = await this.vehiclesRepository.create({
      driver_id,
      plate,
      model,
      type,
      capacity,
    });

    return vehicle;
  }
}

export { CreateVehicleUseCase };
