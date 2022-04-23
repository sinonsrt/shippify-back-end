import { CompaniesRepository } from "modules/companies/infra/repositories/CompaniesRepository";
import { ICompaniesRepository } from "modules/companies/interfaces/ICompaniesRepository";
import { DriversRepository } from "modules/drivers/infra/repositories/DriversRepository";
import { IDriversRepository } from "modules/drivers/interfaces/IDriversRepository";
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

container.registerSingleton<IDriversRepository>(
  "DriversRepository",
  DriversRepository
);
