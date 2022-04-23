import { Router } from "express";
import { CreateCompanyController } from "modules/companies/useCases/CreateCompany/CreateCompanyController";
import { DeleteCompanyController } from "modules/companies/useCases/DeleteCompany/DeleteCompanyController";
import { FindCompanyByIdController } from "modules/companies/useCases/FindCompanyById/FindCompanyByIdController";
import { ListCompaniesController } from "modules/companies/useCases/ListCompanies/ListCompaniesController";

const companiesRoutes = Router();

const createCompanyController = new CreateCompanyController();
const listCompaniesController = new ListCompaniesController();
const findCompanyByIdController = new FindCompanyByIdController();
const deleteCompanyController = new DeleteCompanyController();

companiesRoutes.post("/", createCompanyController.handle);
companiesRoutes.get("/", listCompaniesController.handle);
companiesRoutes.get("/:id", findCompanyByIdController.handle);
companiesRoutes.delete("/:id", deleteCompanyController.handle);

export { companiesRoutes };
