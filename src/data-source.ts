import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "database_shippify",
  port: 3306,
  username: "root",
  password: "admin",
  database: "shippify",
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
});
