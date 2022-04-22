import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("companies")
class Company {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id: number;

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
    if (!this.creation_date) this.creation_date = new Date();
  }
}

export { Company };
