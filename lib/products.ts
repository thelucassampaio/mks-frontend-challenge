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

export function fetchProducts() {
  return useQuery({
    queryKey: ["productData"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products?page=1&rows=5&sortBy=id&orderBy=DESC`
      ).then((res) => res.json()),
  });
}
