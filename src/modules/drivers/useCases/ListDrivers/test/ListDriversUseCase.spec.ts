import { DriversRepositoryInMemory } from "modules/drivers/infra/repositories/in-memory/DriversRepositoryInMemory";

import { ListDriversUseCase } from "../ListDriversUseCase";

describe("Should be able to return a list of Drivers", () => {
  let driversRepository: DriversRepositoryInMemory;
  let listDriversUseCase: ListDriversUseCase;

  beforeEach(() => {
    driversRepository = new DriversRepositoryInMemory();
    listDriversUseCase = new ListDriversUseCase(driversRepository);
  });

  it("Should return a list of Drivers", async () => {
    const driver = await driversRepository.create({
      company_id: 1,
      city: "Test city",
      first_name: "Test name",
      last_name: "Test last name",
      email: "Test email",
      phone: "Test phone",
      avatar_url: "Test.com",
      status: "Test",
    });

    const drivers = await listDriversUseCase.execute();

    expect(typeof drivers).toBe("object");
    expect(drivers).toEqual([driver]);
  });
});
