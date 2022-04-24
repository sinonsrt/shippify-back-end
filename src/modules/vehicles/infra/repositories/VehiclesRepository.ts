import { IVehicleDTO } from "modules/vehicles/dto";
import { Vehicle } from "modules/vehicles/infra/entities/Vehicle";
import { IVehiclesRepository } from "modules/vehicles/interfaces/IVehiclesRepository";
import { getRepository, Repository } from "typeorm";

class VehiclesRepository implements IVehiclesRepository {
  private repository: Repository<Vehicle>;

  constructor() {
    this.repository = getRepository(Vehicle);
  }

  async create({
    driver_id,
    plate,
    model,
    type,
    capacity,
  }: IVehicleDTO): Promise<Vehicle> {
    const vehicle = this.repository.create({
      driver_id,
      plate,
      model,
      type,
      capacity,
    });

    await this.repository.save(vehicle);

    return vehicle;
  }

  async list(driver_id?: number): Promise<Vehicle[]> {
    const vehicles = await this.repository.find({
      relations: ["driver"],
      where: {
        ...(driver_id && { driver_id }),
      },
    });

    return vehicles;
  }

  async update({
    id,
    driver_id,
    plate,
    model,
    type,
    capacity,
  }: IVehicleDTO): Promise<Vehicle> {
    const vehicle = await this.repository.save({
      id,
      driver_id,
      plate,
      model,
      type,
      capacity,
    });

    return vehicle;
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

export { VehiclesRepository };
