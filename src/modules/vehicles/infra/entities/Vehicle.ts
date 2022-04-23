import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("vehicles")
class Vehicle {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
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
