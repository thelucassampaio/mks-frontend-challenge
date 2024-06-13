"use client";

import { fetchProducts } from "@/lib/products";
import type { Product } from "@/lib/products";

import ProductCard from "./ProductCard";

import "./products.scss";

export default function ProductsList() {
  const { isPending, error, data } = fetchProducts();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data.products);

  return (
    <div>
      {data.products.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
