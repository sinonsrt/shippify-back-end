import { Driver } from "modules/drivers/infra/entities/Driver";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("vehicles")
class Vehicle {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Driver)
  @JoinColumn({ name: "driver_id", referencedColumnName: "id" })
  driver_id: number;

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
