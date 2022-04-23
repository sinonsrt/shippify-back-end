import { CompaniesRepository } from "modules/companies/infra/repositories/CompaniesRepository";
import { ICompaniesRepository } from "modules/companies/interfaces/ICompaniesRepository";
import { VehiclesRepository } from "modules/vehicles/infra/repositories/VehiclesRepository";
import { IVehiclesRepository } from "modules/vehicles/interfaces/IVehiclesRepository";
import { container } from "tsyringe";

container.registerSingleton<ICompaniesRepository>(
  "CompaniesRepository",
  CompaniesRepository
);

container.registerSingleton<IVehiclesRepository>(
  "VehiclesRepository",
  VehiclesRepository
);
