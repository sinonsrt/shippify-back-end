import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Companies1650647084480 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "companies",
        columns: [
          {
            name: "id",
            type: "integer",
            isGenerated: true,
            generationStrategy: "increment",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
            isUnique: true,
            length: "100",
          },
          {
            name: "city",
            type: "varchar",
          },
          {
            name: "status",
            type: "varchar",
            length: "20",
          },
          {
            name: "plan_type",
            type: "varchar",
            length: "20",
          },
          {
            name: "creation_date",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("companies");
  }
}
