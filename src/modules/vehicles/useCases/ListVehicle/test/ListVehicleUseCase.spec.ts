import { VehiclesRepositoryInMemory } from "modules/vehicles/infra/repositories/in-memory/VehiclesRepositoryInMemory";

import { ListVehicleUseCase } from "../ListVehicleUseCase";

describe("Should return a list of Vehicles", () => {
  let vehiclesRepository: VehiclesRepositoryInMemory;
  let listVehicleUseCase: ListVehicleUseCase;

  beforeEach(() => {
    vehiclesRepository = new VehiclesRepositoryInMemory();
    listVehicleUseCase = new ListVehicleUseCase(vehiclesRepository);
  });

  it("Should return a list of Vehicles filter by driver_id", async () => {
    const vehicle = await vehiclesRepository.create({
      driver_id: 1,
      plate: "Test plate",
      model: "Test model",
      type: "Test type",
      capacity: "Test capacity",
    });

    await vehiclesRepository.create({
      driver_id: 2,
      plate: "Test plate",
      model: "Test model",
      type: "Test type",
      capacity: "Test capacity",
    });

    const vehicles = await listVehicleUseCase.execute(vehicle.driver_id);

    expect(typeof vehicles).toBe("object");
    expect(vehicles).toEqual([vehicle]);
    expect(vehicles[0].driver_id).toEqual(vehicle.driver_id);
  });

  it("Should return a list of Vehicles filter by driver_id", async () => {
    const vehicle = await vehiclesRepository.create({
      driver_id: 1,
      plate: "Test plate",
      model: "Test model",
      type: "Test type",
      capacity: "Test capacity",
    });

    const vehicles = await listVehicleUseCase.execute();

    expect(typeof vehicles).toBe("object");
    expect(vehicles).toEqual([vehicle]);
  });
});
