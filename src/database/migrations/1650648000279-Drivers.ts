import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Drivers1650648000279 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "drivers",
        columns: [
          {
            name: "id",
            type: "integer",
            isGenerated: true,
            generationStrategy: "increment",
            isPrimary: true,
          },
          {
            name: "company_id",
            type: "integer",
          },
          {
            name: "first_name",
            type: "varchar",
            length: "100",
          },
          {
            name: "last_name",
            type: "varchar",
            length: "100",
          },
          {
            name: "email",
            type: "varchar",
            length: "100",
          },
          {
            name: "phone",
            type: "varchar",
            length: "20",
          },
          {
            name: "avatar_url",
            type: "varchar",
            length: "200",
          },
          {
            name: "status",
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
            name: "FKDriverCompany",
            referencedTableName: "companies",
            referencedColumnNames: ["id"],
            columnNames: ["company_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("drivers");
  }
}
