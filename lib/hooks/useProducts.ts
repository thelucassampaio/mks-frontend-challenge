import { useQuery } from "@tanstack/react-query";
import { fetchProductsData } from "@/lib/products";
import type { Product } from "@/lib/products";

export function useProducts() {
  return useQuery<{ products: Product[] }, Error>({
    queryKey: ["productData"],
    queryFn: fetchProductsData,
  });
}
