import { IDriverDTO } from "modules/drivers/dto";
import { IDriversRepository } from "modules/drivers/interfaces/IDriversRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateDriverUseCase {
  constructor(
    @inject("DriversRepository")
    private driversRepository: IDriversRepository
  ) {}

  async execute({
    company_id,
    city,
    first_name,
    last_name,
    email,
    phone,
    avatar_url,
    status,
  }: IDriverDTO) {
    const driver = await this.driversRepository.create({
      company_id,
      city,
      first_name,
      last_name,
      email,
      phone,
      avatar_url,
      status,
    });

    return driver;
  }
}

export { CreateDriverUseCase };
