import { v4 as uuidv4 } from "uuid";

class Company {
  id: string;
  name: string;
  city: string;
  status: string;
  plan_type: string;
  creation_date: Date;

  constructor() {
    if (!this.id) this.id = uuidv4();
    if (!this.creation_date) this.creation_date = new Date();
  }
}

export { Company };
