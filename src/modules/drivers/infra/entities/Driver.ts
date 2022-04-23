import { Company } from "modules/companies/infra/entities/Company";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("drivers")
class Driver {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Company)
  @JoinColumn({ name: "company_id", referencedColumnName: "id" })
  company_id: number;

  @Column()
  city: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  avatar_url: string;

  @Column()
  status: string;

  @CreateDateColumn()
  creation_date: Date;

  constructor() {
    if (!this.creation_date) this.creation_date = new Date();
  }
}

export { Driver };
