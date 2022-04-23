import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddDriverCity1650698814338 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "drivers",
      new TableColumn({
        name: "city",
        type: "varchar",
        length: "100",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("drivers", "city");
  }
}
