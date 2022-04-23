import { IDriversRepository } from "modules/drivers/interfaces/IDriversRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListDriversUseCase {
  constructor(
    @inject("DriversRepository")
    private driversRepository: IDriversRepository
  ) {}
  async execute() {
    const driver = await this.driversRepository.list();
    return driver;
  }
}

export { ListDriversUseCase };
