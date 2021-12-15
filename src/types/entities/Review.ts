export type Review = {
  name: string;
  description: string;
  date: Date;
  burger_score: number;
  bread_score: number;
  fries_score: number;
  place: string;
  is_vegan_friendly: boolean;
};
