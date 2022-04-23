import { DriversRepositoryInMemory } from "modules/drivers/infra/repositories/in-memory/DriversRepositoryInMemory";

import { CreateDriverUseCase } from "../CreateDriverUseCase";

describe("Should be able to create a new Driver", () => {
  let driversRepository: DriversRepositoryInMemory;
  let createDriverUseCase: CreateDriverUseCase;

  beforeEach(() => {
    driversRepository = new DriversRepositoryInMemory();
    createDriverUseCase = new CreateDriverUseCase(driversRepository);
  });

  it("Should be able to create a new Driver", async () => {
    const driver = await createDriverUseCase.execute({
      company_id: 1,
      city: "test city",
      first_name: "test first_name",
      last_name: "test last_name",
      email: "test email",
      phone: "test phone",
      avatar_url: "test avatar_url",
      status: "test status",
    });

    expect(driver).toHaveProperty("id");
    expect(typeof driver).toBe("object");
  });
});
