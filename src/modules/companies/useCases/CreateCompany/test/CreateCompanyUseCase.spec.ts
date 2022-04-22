import { CompaniesRepositoryInMemory } from "modules/companies/infra/repositories/in-memory/CompaniesRepositoryInMemory";

import { CreateCompanyUseCase } from "../CreateCompanyUseCase";

describe("Create a new Company", () => {
  let companiesRepository: CompaniesRepositoryInMemory;
  let createCompanyUseCase: CreateCompanyUseCase;

  beforeEach(() => {
    companiesRepository = new CompaniesRepositoryInMemory();
    createCompanyUseCase = new CreateCompanyUseCase(companiesRepository);
  });

  it("Should be able to create a new Company", async () => {
    const company = await createCompanyUseCase.execute({
      name: "Company test",
      city: "Test city",
      plan_type: "Plan test",
      status: "Status",
    });

    console.log({ company });

    expect(company).toHaveProperty("creation_date");
    expect(typeof company).toBe("object");
  });
});
