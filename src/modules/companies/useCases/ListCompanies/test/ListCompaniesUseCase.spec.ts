import { CompaniesRepositoryInMemory } from "modules/companies/infra/repositories/in-memory/CompaniesRepositoryInMemory";

import { CreateCompanyUseCase } from "../../CreateCompany/CreateCompanyUseCase";

describe("Should be able to return a list of Companies", () => {
  let companiesRepository: CompaniesRepositoryInMemory;
  let createCompanyUseCase: CreateCompanyUseCase;

  beforeEach(() => {
    companiesRepository = new CompaniesRepositoryInMemory();
    createCompanyUseCase = new CreateCompanyUseCase(companiesRepository);
  });

  it("", async () => {});
});
