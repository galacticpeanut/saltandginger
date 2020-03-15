export class Menu {
  public menu_id: number;
  public menu_name: string;
  public menu_description: string;
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
