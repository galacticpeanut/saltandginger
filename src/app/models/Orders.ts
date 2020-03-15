import { Deserializable } from './Deserialize';
import { Menu } from './Menu';
import { Users } from './Users';

export class Orders {
  public item_id: number;
  public created_on: Date;
  public items: Menu[];
  public users: Users;

  deserialize(input: any): this {
    Object.assign(this, input);

    this.items = input.items.map(item => new Menu().deserialize(item));
    this.users = input.users.map(user => new Users().deserialize(user));

    return this;
  }

  constructor() {
    this.created_on = new Date();
  }
}