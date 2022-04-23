import { VehiclesRepositoryInMemory } from "modules/vehicles/infra/repositories/in-memory/VehiclesRepositoryInMemory";

import { DeleteVehicleUseCase } from "../DeleteVehicleUseCase";

describe("Should delete a vehicle", () => {
  let vehiclesRepository: VehiclesRepositoryInMemory;
  let deleteVehicleUseCase: DeleteVehicleUseCase;

  beforeEach(() => {
    vehiclesRepository = new VehiclesRepositoryInMemory();
    deleteVehicleUseCase = new DeleteVehicleUseCase(vehiclesRepository);
  });

  it("Should delete a vehicle", async () => {
    const createdVehicle = await vehiclesRepository.create({
      driver_id: 1,
      plate: "Test plate",
      model: "Test model",
      type: "Test type",
      capacity: "Test capacity",
    });

    await vehiclesRepository.create({
      driver_id: 2,
      plate: "Test plate 2",
      model: "Test model 2",
      type: "Test type 2",
      capacity: "Test capacity 2",
    });

    await deleteVehicleUseCase.execute(createdVehicle.id);

    const company = await vehiclesRepository.list();

    expect(company).not.toBe([createdVehicle]);
  });
});
