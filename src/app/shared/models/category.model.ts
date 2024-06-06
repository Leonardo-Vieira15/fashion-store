export class Category {
  tag!: string;
  title!: string;
  button!: {
    action: () => void,
    text: string
  };
  img!: string;
}
