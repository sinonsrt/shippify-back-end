import { VehiclesRepositoryInMemory } from "modules/vehicles/infra/repositories/in-memory/VehiclesRepositoryInMemory";

import { FindVehicleByIdUseCase } from "../FindVehicleByIdUseCase";

describe("Should find a vehicle by id", () => {
  let vehiclesRepository: VehiclesRepositoryInMemory;
  let findVehicleByIdUseCase: FindVehicleByIdUseCase;

  beforeEach(() => {
    vehiclesRepository = new VehiclesRepositoryInMemory();
    findVehicleByIdUseCase = new FindVehicleByIdUseCase(vehiclesRepository);
  });

  it("Should find a vehicle by id", async () => {
    const vehicle = await vehiclesRepository.create({
      driver_id: 1,
      plate: "test plate",
      model: "test model",
      type: "test type",
      capacity: "test capacity",
    });

    const findVehicle = await findVehicleByIdUseCase.execute(vehicle.id);

    expect(findVehicle).toBe(vehicle);
  });
});
