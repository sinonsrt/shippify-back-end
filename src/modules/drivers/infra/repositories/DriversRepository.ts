import { IDriverDTO } from "modules/drivers/dto";
import { IDriversRepository } from "modules/drivers/interfaces/IDriversRepository";
import { getRepository, Repository } from "typeorm";

import { Driver } from "../entities/Driver";

class DriversRepository implements IDriversRepository {
  private repository: Repository<Driver>;

  constructor() {
    this.repository = getRepository(Driver);
  }

  async create({
    company_id,
    city,
    first_name,
    last_name,
    email,
    phone,
    avatar_url,
    status,
  }: IDriverDTO): Promise<Driver> {
    const driver = this.repository.create({
      company_id,
      city,
      first_name,
      last_name,
      email,
      phone,
      avatar_url,
      status,
    });

    await this.repository.save(driver);

    return driver;
  }

  async list(): Promise<Driver[]> {
    const drivers = await this.repository.find();

    return drivers;
  }
}

export { DriversRepository };
