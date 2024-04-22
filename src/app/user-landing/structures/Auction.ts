export interface Auction {
  id: number;
  creator_name: string;
  creator_surname: string;
  bidder_id: number;
  current_price: number;
  date: string;
  price: number;
  city: string;
  category: string;
  description: string;
  winner_name: string;
  winner_surname: string;
  ended: boolean;
}
