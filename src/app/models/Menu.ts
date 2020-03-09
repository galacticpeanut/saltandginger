export class Menu {
  public item_id: number;
  public name: string;
  public description: string;
  public ingredients: string;
  public price_min: number;
  public price_max: number;
  public image_location: string;
  public allergies: string;
  public diet_restriction: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
