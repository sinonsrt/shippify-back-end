import { CompaniesRepositoryInMemory } from "modules/companies/infra/repositories/in-memory/CompaniesRepositoryInMemory";

import { UpdateCompanyUseCase } from "../UpdateCompanyUseCase";

describe("Should be able to update a company", () => {
  let companiesRepository: CompaniesRepositoryInMemory;
  let updateCompanyUseCase: UpdateCompanyUseCase;

  beforeEach(() => {
    companiesRepository = new CompaniesRepositoryInMemory();
    updateCompanyUseCase = new UpdateCompanyUseCase(companiesRepository);
  });

  it("Should be able to update a company", async () => {
    const company = await companiesRepository.create({
      city: "Test city",
      name: "Test name",
      plan_type: "Test plan",
      status: "Test status",
    });

    const updatedCompany = {
      id: company.id,
      city: "Test city 2",
      name: "Test name 2 ",
      plan_type: "Test plan 2",
      status: "Test status 2",
    };

    const requestUpdatedCompany = await updateCompanyUseCase.execute(
      updatedCompany
    );

    expect(requestUpdatedCompany).toBe(company);
  });
});
