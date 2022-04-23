import { VehiclesRepositoryInMemory } from "modules/vehicles/infra/repositories/in-memory/VehiclesRepositoryInMemory";

import { UpdateVehicleUseCase } from "../UpdateVehicleUseCase";

describe("Should be able to update a Vehicle", () => {
  let vehiclesRepository: VehiclesRepositoryInMemory;
  let updateVehicleUseCase: UpdateVehicleUseCase;

  beforeEach(() => {
    vehiclesRepository = new VehiclesRepositoryInMemory();
    updateVehicleUseCase = new UpdateVehicleUseCase(vehiclesRepository);
  });

  it("Should be able to update a Vehicle", async () => {
    const vehicle = await vehiclesRepository.create({
      driver_id: 1,
      plate: "test plate",
      model: "test model",
      type: "test type",
      capacity: "test capacity",
    });

    const updatedVehicle = {
      id: vehicle.id,
      driver_id: 2,
      plate: "test plate 2",
      model: "test model 2",
      type: "test type 2",
      capacity: "test capacity 2",
    };

    const requestUpdatedCompany = await updateVehicleUseCase.execute(
      updatedVehicle
    );

    expect(requestUpdatedCompany).toBe(vehicle);
  });
});
