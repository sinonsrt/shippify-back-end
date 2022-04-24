import { Driver } from "modules/drivers/infra/entities/Driver";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("vehicles")
class Vehicle {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ select: false })
  driver_id: number;

  @ManyToOne(() => Driver, (driver) => driver.first_name)
  @JoinColumn({ name: "driver_id", referencedColumnName: "id" })
  driver: Driver;

  @Column()
  plate: string;

  @Column()
  model: string;

  @Column()
  type: string;

  @Column()
  capacity: string;

  @CreateDateColumn()
  creation_date: Date;

  constructor() {
    if (!this.creation_date) this.creation_date = new Date();
  }
}

export { Vehicle };
