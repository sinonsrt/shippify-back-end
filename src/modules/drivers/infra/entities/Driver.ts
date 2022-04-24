import { Company } from "modules/companies/infra/entities/Company";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("drivers")
class Driver {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ select: false })
  company_id: number;

  @ManyToOne(() => Company, (company) => company.name)
  @JoinColumn({ name: "company_id", referencedColumnName: "id" })
  company: Company;

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
