import { CompaniesRepository } from "modules/companies/infra/repositories/CompaniesRepository";
import { ICompaniesRepository } from "modules/companies/interfaces/ICompaniesRepository";
import { container } from "tsyringe";

container.registerSingleton<ICompaniesRepository>(
  "CompaniesRepository",
  CompaniesRepository
);
