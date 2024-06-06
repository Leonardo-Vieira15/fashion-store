export class ShopItem {
  title!: string;
  description!: string;
  price!: {
    amount: number;
    currency: string;
  };
  img!: string;
}
