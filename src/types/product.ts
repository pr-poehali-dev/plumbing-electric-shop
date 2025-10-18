export interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  image: string;
  inStock: boolean;
  description?: string;
  specifications?: { label: string; value: string }[];
  features?: string[];
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}
