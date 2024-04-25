interface UpdateProductInterface {
  name?: string;
  description?: string;
  price?: number;
}
export class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public description?: string,
  ) { }

  updateWhit({ name, description, price }: UpdateProductInterface) {
    this.name = name ?? this.name;
    this.description = description ?? this.description;
    this.price = price ?? this.price;
  }
}
