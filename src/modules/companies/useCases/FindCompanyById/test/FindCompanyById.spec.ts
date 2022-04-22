import { CompaniesRepositoryInMemory } from "modules/companies/infra/repositories/in-memory/CompaniesRepositoryInMemory";

import { FindCompanyByIdUseCase } from "../FindCompanyByIdUseCase";

describe("Should find a company by id", () => {
  let companiesRepository: CompaniesRepositoryInMemory;
  let findCompanyByIdUseCase: FindCompanyByIdUseCase;

  beforeEach(() => {
    companiesRepository = new CompaniesRepositoryInMemory();
    findCompanyByIdUseCase = new FindCompanyByIdUseCase(companiesRepository);
  });

  it("Should find a company by id", async () => {
    const company = await companiesRepository.create({
      city: "Test city",
      name: "Test name",
      plan_type: "Test plan",
      status: "Test status",
    });

    const findCompany = await findCompanyByIdUseCase.execute(company.id);

    expect(findCompany).toBe(company);
  });
});
