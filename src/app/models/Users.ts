export class Users {
  public user_id: number;
  public first_name: string;
  public last_name: string;
  public mail_address: string;
  public super_admin: false;
  public phone_number: string;
  public email: string;
  public password: string;
  public created_on: Date;
  public last_login: Date;

  constructor() {
    this.created_on = new Date();
  }

  deserialize(input: any): this {
    return Object.assign(this, input);
  }

  get_full_name() {
    return this.first_name + ' ' + this.last_name;
  }
  
}