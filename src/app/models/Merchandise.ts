export class Merchandise {
  public merchandise_id: number;
  public merchandise_name: string;
  public merchansise_description: string;
  public price: number;
  public image_location: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
