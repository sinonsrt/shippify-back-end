import { CompaniesRepositoryInMemory } from "modules/companies/infra/repositories/in-memory/CompaniesRepositoryInMemory";

import { ListCompaniesUseCase } from "../ListCompaniesUseCase";

describe("Should be able to return a list of Companies", () => {
  let companiesRepository: CompaniesRepositoryInMemory;
  let listCompaniesUseCase: ListCompaniesUseCase;

  beforeEach(() => {
    companiesRepository = new CompaniesRepositoryInMemory();
    listCompaniesUseCase = new ListCompaniesUseCase(companiesRepository);
  });

  it("Should return a list of companies", async () => {
    const company = await companiesRepository.create({
      city: "Test city",
      name: "Test name",
      plan_type: "Test plan",
      status: "Test status",
    });

    const companies = await listCompaniesUseCase.execute();

    expect(typeof companies).toBe("object");
    expect(companies).toEqual([company]);
  });
});
