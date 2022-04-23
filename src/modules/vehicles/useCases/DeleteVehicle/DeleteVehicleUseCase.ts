import { IVehiclesRepository } from "modules/vehicles/interfaces/IVehiclesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteVehicleUseCase {
  constructor(
    @inject("VehiclesRepository")
    private vehiclesRepository: IVehiclesRepository
  ) {}

  async execute(id: number): Promise<void> {
    await this.vehiclesRepository.delete(id);
  }
}

export { DeleteVehicleUseCase };
