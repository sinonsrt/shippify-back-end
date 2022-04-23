import { CompaniesRepositoryInMemory } from "modules/companies/infra/repositories/in-memory/CompaniesRepositoryInMemory";

import { DeleteCompanyUseCase } from "../DeleteCompanyUseCase";

describe("Should be able to delete a company", () => {
  let companiesRepository: CompaniesRepositoryInMemory;
  let deleteCompanyUseCase: DeleteCompanyUseCase;
  beforeEach(() => {
    companiesRepository = new CompaniesRepositoryInMemory();
    deleteCompanyUseCase = new DeleteCompanyUseCase(companiesRepository);
  });

  it("Should be able to able to delete a company", async () => {
    const createdCompany = await companiesRepository.create({
      city: "Test city",
      name: "Test name",
      plan_type: "Test plan",
      status: "Test status",
    });

    await companiesRepository.create({
      city: "Test city 2",
      name: "Test name 2",
      plan_type: "Test plan 2",
      status: "Test status 2",
    });

    await deleteCompanyUseCase.execute(createdCompany.id);

    const company = await companiesRepository.findById(createdCompany.id);

    expect(company).toBe(undefined);
  });
});
