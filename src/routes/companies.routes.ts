import { Router } from "express";
import { CreateCompanyController } from "modules/companies/useCases/CreateCompany/CreateCompanyController";
import { ListCompaniesController } from "modules/companies/useCases/ListCompanies/ListCompaniesController";

const companiesRoutes = Router();

const createCompanyController = new CreateCompanyController();
const listCompaniesController = new ListCompaniesController();

companiesRoutes.post("/", createCompanyController.handle);
companiesRoutes.get("/", listCompaniesController.handle);

export { companiesRoutes };
