import { CompaniesRepositoryInMemory } from "modules/companies/infra/repositories/in-memory/CompaniesRepositoryInMemory";

import { CreateCompanyUseCase } from "../CreateCompanyUseCase";

describe("Should be able to create a new company", () => {
  let companiesRepository: CompaniesRepositoryInMemory;
  let createCompanyUseCase: CreateCompanyUseCase;

  beforeEach(() => {
    companiesRepository = new CompaniesRepositoryInMemory();
    createCompanyUseCase = new CreateCompanyUseCase(companiesRepository);
  });

  it("Should be able to create a new company", async () => {
    const company = await createCompanyUseCase.execute({
      name: "Company test",
      city: "Test city",
      plan_type: "Plan test",
      status: "Status",
    });

    expect(company).toHaveProperty("id");
    expect(typeof company).toBe("object");
  });
});
