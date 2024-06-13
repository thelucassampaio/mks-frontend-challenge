export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

import { useQuery } from "@tanstack/react-query";

export async function fetchProductsData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?page=1&rows=5&sortBy=id&orderBy=DESC`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}
