import { randomInt } from "crypto";
import { IDriverDTO } from "modules/drivers/dto";
import { IDriversRepository } from "modules/drivers/interfaces/IDriversRepository";

import { Driver } from "../../entities/Driver";

class DriversRepositoryInMemory implements IDriversRepository {
  drivers: Driver[] = [];

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
    const driver = new Driver();

    Object.assign(driver, {
      id: randomInt(10),
      company_id,
      city,
      first_name,
      last_name,
      email,
      phone,
      avatar_url,
      status,
    });

    await this.drivers.push(driver);

    return driver;
  }

  async list(): Promise<Driver[]> {
    return this.drivers;
  }
}

export { DriversRepositoryInMemory };
