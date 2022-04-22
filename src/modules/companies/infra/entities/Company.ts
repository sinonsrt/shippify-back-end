import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("companies")
class Company {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  city: string;

  @Column()
  status: string;

  @Column()
  plan_type: string;

  @CreateDateColumn()
  creation_date: Date;

  constructor() {
    if (!this.id) this.id = uuidv4();
    if (!this.creation_date) this.creation_date = new Date();
  }
}

export { Company };
