export interface Recipe {
  title: string;
  description: string;
  image?: string;
  id: number;
  ingridients: string[],
  tags: string[],
}
