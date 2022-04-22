import { Router } from "express";
import { CreateCompanyController } from "modules/companies/useCases/CreateCompanyController";

const companiesRoutes = Router();

const createCompanyController = new CreateCompanyController();

companiesRoutes.post("/", createCompanyController.handle);
companiesRoutes.get("/", () => {
  console.log("CHEOGU AQUI PAIZAO");
});

export { companiesRoutes };
