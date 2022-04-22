import { CompaniesRepositoryInMemory } from "modules/companies/infra/repositories/in-memory/CompaniesRepositoryInMemory";

import { CreateCompanyUseCase } from "../CreateCompanyUseCase";

let companiesRepository: CompaniesRepositoryInMemory;
let createCompanyUseCase: CreateCompanyUseCase;

describe("Create a new Company", () => {
  beforeEach(() => {
    companiesRepository = new CompaniesRepositoryInMemory();
    createCompanyUseCase = new CreateCompanyUseCase(companiesRepository);
  });

  it("Should be able to create a new Company", async () => {
    await createCompanyUseCase.execute({
      name: "Company test",
      city: "Test city",
      plan_type: "Plan test",
      status: "Status",
    });
  });
});
