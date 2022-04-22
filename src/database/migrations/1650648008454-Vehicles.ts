import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Vehicles1650648008454 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "vehicles",
        columns: [
          {
            name: "id",
            type: "integer",
            isGenerated: true,
            isPrimary: true,
          },
          {
            name: "driver_id",
            type: "integer",
          },
          {
            name: "plate",
            type: "varchar",
            length: "100",
          },
          {
            name: "model",
            type: "varchar",
            length: "100",
          },
          {
            name: "type",
            type: "varchar",
            length: "20",
          },
          {
            name: "capacity",
            type: "varchar",
            length: "20",
          },
          {
            name: "creation_date",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKVehicleDriver",
            referencedTableName: "drivers",
            referencedColumnNames: ["id"],
            columnNames: ["driver_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("vehicles");
  }
}
