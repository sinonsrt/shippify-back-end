import { randomInt } from "crypto";
import { IVehicleDTO } from "modules/vehicles/dto";
import { Vehicle } from "modules/vehicles/infra/entities/Vehicle";
import { IVehiclesRepository } from "modules/vehicles/interfaces/IVehiclesRepository";

class VehiclesRepositoryInMemory implements IVehiclesRepository {
  vehicles: Vehicle[] = [];

  async create({
    driver_id,
    plate,
    model,
    type,
    capacity,
  }: IVehicleDTO): Promise<Vehicle> {
    const vehicle = new Vehicle();

    Object.assign(vehicle, {
      id: randomInt(10),
      driver_id,
      plate,
      model,
      type,
      capacity,
    });

    this.vehicles.push(vehicle);

    return vehicle;
  }

  async list(driver_id?: number): Promise<Vehicle[]> {
    if (driver_id) {
      return this.vehicles.filter((vehicle) => vehicle.driver_id === driver_id);
    }
    return this.vehicles;
  }

  async findById(id: number): Promise<Vehicle> {
    const vehicle = this.vehicles.find((v) => v.id === id);
    return vehicle;
  }

  async update({
    id,
    driver_id,
    plate,
    model,
    type,
    capacity,
  }: IVehicleDTO): Promise<Vehicle> {
    const vehicle = this.vehicles.find((v) => v.id === id);

    vehicle.driver_id = driver_id;
    vehicle.plate = plate;
    vehicle.model = model;
    vehicle.type = type;
    vehicle.capacity = capacity;

    return vehicle;
  }

  async delete(id: number): Promise<void> {
    const vehicle = this.vehicles.find((v) => v.id === id);
    const index = this.vehicles.indexOf(vehicle);
    this.vehicles.splice(index, 1);
  }
}

export { VehiclesRepositoryInMemory };
