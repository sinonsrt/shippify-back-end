import { Router } from "express";
import { CreateCompanyController } from "modules/companies/useCases/CreateCompany/CreateCompanyController";
import { FindCompanyByIdController } from "modules/companies/useCases/FindCompanyById/FindCompanyByIdController";
import { ListCompaniesController } from "modules/companies/useCases/ListCompanies/ListCompaniesController";

const companiesRoutes = Router();

const createCompanyController = new CreateCompanyController();
const listCompaniesController = new ListCompaniesController();
const findCompanyByIdController = new FindCompanyByIdController();

companiesRoutes.post("/", createCompanyController.handle);
companiesRoutes.get("/", listCompaniesController.handle);
companiesRoutes.get("/:id", findCompanyByIdController.handle);

export { companiesRoutes };
