import { VehiclesRepositoryInMemory } from "modules/vehicles/infra/repositories/in-memory/VehiclesRepositoryInMemory";

import { CreateVehicleUseCase } from "../CreateVehicleUseCase";

describe("Should be able to create a new vehicle", () => {
  let vehiclesRepository: VehiclesRepositoryInMemory;
  let createVehicleUseCase: CreateVehicleUseCase;

  beforeEach(() => {
    vehiclesRepository = new VehiclesRepositoryInMemory();
    createVehicleUseCase = new CreateVehicleUseCase(vehiclesRepository);
  });

  it("Should be able to create a new Vehicle", async () => {
    const vehicle = await createVehicleUseCase.execute({
      driver_id: 1,
      plate: "test plate",
      model: "test model",
      type: "test type",
      capacity: "test capacity",
    });

    expect(vehicle).toHaveProperty("id");
    expect(typeof vehicle).toBe("object");
  });
});
